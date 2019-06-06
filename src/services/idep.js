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
  FINAIS: "final"
};

export const getMetaAnos = async (codEol, tipo = ANOS_META.INICIAIS) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/${codEol}`, header);
  const data = await response.json();
  return data.result[0];
};

// 10.49.23.85:8080/indices_ano_inicial/17973
export const getIncidesAnoInicial = async codEol => {
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

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#c4c4c4"
      }
    }
  },
  toolbox: {
    orient: "vertical",
    feature: {
      saveAsImage: { show: true, title: "Baixar gráfico" }
    }
  },
  legend: {
    data: ["Alcançado", "Meta"]
  },
  xAxis: [
    {
      type: "category",
      data: [],
      axisPointer: {
        type: "shadow"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "Meta",
      min: 0,
      max: 10,
      interval: 1
    }
  ],
  series: [
    {
      name: "Alcançado",
      type: "bar",
      data: [2.0, 4.9, 7.0, 5, 6, 4],
      color: "#d48265",
      barMaxWidth: 50
    },
    {
      name: "Meta",
      type: "line",
      data: [],
      color: "#91c7ae"
    }
  ]
};
