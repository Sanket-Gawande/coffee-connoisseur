import React from "react";
import styles from '../styles/container.module.css'

const Container = ({ onclickHandler  , isLoading }) => {
  return (
    <div className={styles.container}>
      <h1> <span>Coffee </span> Connoisseur</h1>
      <p>check coffee shops around you..</p>
      <button onClick={onclickHandler}> { isLoading ? "Locating" : "Show shops nearby" }</button>
    </div>
  );
};

export default Container;
