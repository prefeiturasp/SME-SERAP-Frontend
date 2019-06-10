import CONFIG from "../configs/environment";
import authService from "./auth";

const BASE_HEADER = {
  method: "GET",
  headers: {
    Authorization: `JWT ${authService.getToken()}`
  }
};

const rf = authService.getRF();

export const getMetaAnos = async codEol => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/barchart/${codEol}`, header);
  const data = await response.json();
  return data.result;
};

// 10.49.23.85:8080/indices_ano_inicial/17973
export const getIndicesAnos = async (codEol, endpoint) => {
  try {
    const header = { ...BASE_HEADER };
    const response = await fetch(
      `${CONFIG.API_URL}/${endpoint}/${codEol}`,
      header
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log(`Erro API ${error}`);
  }
};

export const getEscolas = async () => {
  let header = { ...BASE_HEADER };
  const response = await fetch(
    `${CONFIG.API_URL}/servidorescolas/${rf}`,
    header
  );
  const data = await response.json();
  return data.results;
};
