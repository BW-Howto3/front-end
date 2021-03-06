import React from "react";
import { connect } from "react-redux";
const Header = (props) => {
  console.log(props);
  return (
    <span className="howToCard">
      <h2>Name: {props.info.name}</h2>
      <p>Description: {props.info.description}</p>
    </span>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
  };
};
export default connect(mapStateToProps, {})(Header);
