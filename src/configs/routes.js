import Login from "../screens/login/";
import Main from "../screens/main";

const routesConfig = [
  {
    path: "/",
    component: Main,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: false
  }
];

export default routesConfig;
