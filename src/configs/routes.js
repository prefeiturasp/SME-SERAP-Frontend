import Simple from "../components/charts/Simple";
import Login from "../screens/login/login";

const routesConfig = [
  {
    path: "/",
    component: Simple,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: false
  }
];

export default routesConfig;
