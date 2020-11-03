import React from "react";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
}) => {
  return loading ? <Loader /> : <Section title="Search"></Section>;
};

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default SearchPresenter;
