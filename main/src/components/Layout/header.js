import { Fragment } from "react";
import mealsImage from "../../assests/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> FastFood Delivery!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
