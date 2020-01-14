import React from "react";
import PropTypes from "prop-types";

const Form = ({ fetchImage }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const term = event.currentTarget.elements.search.value;
        fetchImage(term);
      }}
    >
      <input name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  fetchImage: PropTypes.func.isRequired
};

export default Form;
