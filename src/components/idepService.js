const BASE_URL = "http://localhost:3001";

const BASE_HEADER = {
  method: "GET"
};

export const ANOS_META = {
  INICIAIS: "inicial",
  FINAIS: "final"
};

export const getMetaAnos = async (codEol, tipo = ANOS_META.INICIAIS) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${BASE_URL}/${tipo}/${codEol}`, header);
  const json = await response.json();
  return json;
};

export const getPorNivelSocioEconomico = async (
  nse,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${BASE_URL}/${tipo}/?nse=${nse}`, header);
  const json = await response.json();
  return json;
};

export const getPorIndiceComplexidadeGestao = async (
  icg,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${BASE_URL}/${tipo}/?icg=${icg}`, header);
  const json = await response.json();
  return json;
};
