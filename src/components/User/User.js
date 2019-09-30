import React from "react";
import PropTypes from "prop-types";

const User = ({ name, surname }) => {
  const style = {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 0px 1px 1px rgba(255, 255, 255, 0.4)",
    borderRadius: 10,
  };

  const labelStyle = {
    margin: 0,
  };
  return (
    <div style={{ ...style, color: !surname ? "red" : "#fff" }}>
      <p style={labelStyle}>{name}</p>
      {!!surname && <p style={labelStyle}>{surname}</p>}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
};

export { User };
