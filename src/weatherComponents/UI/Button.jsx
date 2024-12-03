import classes from "./Button.module.css";
/* eslint-disable react/prop-types */

export default function Button({ children, ...props }) {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
}
