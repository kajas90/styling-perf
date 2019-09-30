import React from "react";
import PropTypes from "prop-types";
import styles from "./User.module.css";

const User = ({ name, surname }) => {
  return (
    <div className={`${styles.user} ${!surname ? styles.colored : ""}`}>
      <p className={styles.label}>{name}</p>
      {!!surname && <p className={styles.label}>{surname}</p>}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string
};

export { User };
