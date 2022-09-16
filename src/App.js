import FunctionalCounter from "./components/FunctionalCounter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.authReducer.isLoggedIn);
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <FunctionalCounter />
    </>
  );
}

export default App;
