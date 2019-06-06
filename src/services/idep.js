import CONFIG from "../configs/environment";
import authService from "./auth";

const BASE_HEADER = {
  method: "GET",
  headers: {
    Authorization: `JWT ${authService.getToken()}`
  }
};

const rf = authService.getRF();

export const ANOS_META = {
  INICIAIS: "meta_ano_inicial",
  FINAIS: "meta_ano_final"
};

export const getMetaAnos = async (codEol, tipo = ANOS_META.INICIAIS) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/${codEol}`, header);
  const data = await response.json();
  return data.result[0];
};

// 10.49.23.85:8080/indices_ano_inicial/17973
export const getIndicesAnoInicial = async codEol => {
  const header = { ...BASE_HEADER };

  const response = await fetch(
    `${CONFIG.API_URL}/indices_ano_inicial/${parseInt(codEol)}`,
    header
  );
  const data = await response.json();
  return data.result;
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

export const getPorNivelSocioEconomico = async (
  nse,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/?nse=${nse}`, header);
  const json = await response.json();
  return json;
};

export const getPorIndiceComplexidadeGestao = async (
  icg,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/?icg=${icg}`, header);
  const json = await response.json();
  return json;
};
