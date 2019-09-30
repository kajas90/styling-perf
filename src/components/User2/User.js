import React from "react";
import PropTypes from "prop-types";
import "./User.css";

const User = ({ name, surname }) => {
  return (
    <div className={`user${!surname ? " colored" : ""}`}>
      <p className="label">{name}</p>
      {!!surname && <p className="label">{surname}</p>}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
};

export { User };
