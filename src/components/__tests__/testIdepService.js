import { ANOS_META } from "../idepService";

const metaEscolaAnosIniciaisEol191 = {
  nse: 3,
  icg: 1,
  id: 191,
  anos: [2018, 2019, 2020, 2021, 2022, 2023],
  metas: ["5,5", "5,7", "5,9", "6,0", "6,2", "6,4"]
};

const metaEscolaAnosFinaisEol191 = {
  nse: 3,
  icg: 1,
  id: 191,
  anos: [2018, 2019, 2020, 2021, 2022, 2023],
  metas: ["4,6", "4,9", "5,1", "5,3", "5,5", "5,8"]
};

describe("Teste IDEP Service", () => {
  const getMetaAnosIniciais = jest.fn((codEol, tipo = ANOS_META.INICIAIS) => {
    const p = new Promise((resolve, reject) => {
      resolve(metaEscolaAnosIniciaisEol191);
    });
    return p;
  });

  const getMetaAnosFinais = jest.fn((codEol, tipo = ANOS_META.FINAIS) => {
    const p = new Promise((resolve, reject) => {
      resolve(metaEscolaAnosFinaisEol191);
    });
    return p;
  });
  test("getMetaAnos(191-INICIAIS)", () => {
    getMetaAnosIniciais(191).then(response => {
      expect(response).toBe(metaEscolaAnosIniciaisEol191);
    });
  });

  test("getMetaAnos(191-FINAIS)", () => {
    getMetaAnosFinais(191).then(response => {
      expect(response).toBe(metaEscolaAnosFinaisEol191);
    });
  });
});
