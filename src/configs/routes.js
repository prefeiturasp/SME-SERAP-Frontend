import EscolheEscola from "../screens/escolheEscola";
import Login from "../screens/login/";
import Simple from "../components/charts/Simple";

const routesConfig = [
  {
    path: "/",
    component: EscolheEscola,
    exact: true
  },
  {
    path: "/grafico",
    component: Simple,
    exact: false
  },
  {
    path: "/login",
    component: Login,
    exact: false
  }
];

export default routesConfig;
