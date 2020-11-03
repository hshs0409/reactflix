import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Section title="Top Rated Shows">
        {topRated?.[0] &&
          topRated.map((show) => <span key={show.id}>{show.name}</span>)}
      </Section>
      <Section title="Airing Today ">
        {airingToday?.[0] &&
          airingToday.map((show) => <span key={show.id}>{show.name}</span>)}
      </Section>
      <Section title="Popular Shows">
        {popular?.[0] &&
          popular.map((show) => <span key={show.id}>{show.name}</span>)}
      </Section>
    </>
  );

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default TVPresenter;
