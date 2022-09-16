import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";

import { authActions } from "../store/index";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.authReducer.isLoggedIn);

  const logoutClickHandler = (event) => {
    dispatch(authActions.logoutHandler());
  };

  return (
    <header className={classes.header}>
      <h1>{!isAuthenticated ? "Redux Auth" : ""}</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutClickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
