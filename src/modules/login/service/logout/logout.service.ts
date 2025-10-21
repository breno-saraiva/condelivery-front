import { NavigateFunction } from "react-router-dom";
class LogoutService {
  execute(navigate: NavigateFunction) {
    localStorage.removeItem("@access_token");
    localStorage.removeItem("@user_data");
    navigate("/");
  }
}
const logoutService = new LogoutService();

export { logoutService };
