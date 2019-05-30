import decode from "jwt-decode";
import CONFIG from "../config";

export const TOKEN_ALIAS = "TOKEN";

const login = async (rf, cpf, anonasc, mesnasc) => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/login/`, {
      method: "POST",
      body: JSON.stringify({ rf, cpf, anonasc, mesnasc }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    debugger;
    const json = await response.json();
    const isValid = isValidResponse(json);
    if (isValid) {
      localStorage.setItem(TOKEN_ALIAS, json.token);
      // window.location.href = "/";
    }
    return { isValid: isValid, detail: json.message };
  } catch (error) {
    console.log(`login error: ${error}`);
    return { isValid: false, detail: error };
  }
};

const logout = () => {
  localStorage.removeItem(TOKEN_ALIAS);
  window.location.reload();
};

const getToken = () => {
  let token = localStorage.getItem(TOKEN_ALIAS);
  if (token) {
    if (isTokenExpired(token)) logout();
    return token;
  }
};

const getRF = () => {
  const decoded = decode(getToken());
  return decoded.rf;
};

const isLoggedIn = () => {
  const token = localStorage.getItem(TOKEN_ALIAS);
  if (token) {
    return true;
  }
  return false;
};

const isValidResponse = json => {
  try {
    const decoded = decode(json.token);
    const test2 =
      decoded.user_id !== undefined &&
      decoded.username !== undefined &&
      decoded.exp !== undefined &&
      decoded.rf !== undefined;
    const test1 = json.token.length >= 100 ? true : false;
    return test1 && test2;
  } catch (error) {
    return false;
  }
};

export const isTokenExpired = token => {
  try {
    const secondsLeft = calculateTokenSecondsLeft(token);
    if (secondsLeft <= 0) {
      return true;
    } else return false;
  } catch (err) {
    console.log("Falha ao verificar token expirado");
    return true;
  }
};

export const calculateTokenSecondsLeft = token => {
  const decoded = decode(token);
  const dateToken = new Date(decoded.exp * 1000);
  const dateVerify = new Date(Date.now());
  const secondsLeft = (dateToken - dateVerify) / 1000;
  return secondsLeft;
};

const authService = {
  login,
  logout,
  getToken,
  getRF,
  isLoggedIn,
  isValidResponse
};

export default authService;
