import Simple from "../components/charts/Simple";
import EscolheEscola from "../screens/escolheEscola/EscolheEscola";
import Login from "../screens/login/Login";

const routesConfig = [
  {
    path: "/",
    component: EscolheEscola,
    exact: true
  },
  {
    path: "/simple",
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
