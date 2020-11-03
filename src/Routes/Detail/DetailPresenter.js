import React from "react";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";

const DetailPresenter = ({ result, loading, error }) => {
  return loading ? <Loader /> : <Section title="Search"></Section>;
};

DetailPresenter.propTypes = {
  movieResults: propTypes.object,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default DetailPresenter;
