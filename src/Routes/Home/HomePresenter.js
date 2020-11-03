import React from "react";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Section title="Now Playing Movies">
        {nowPlaying?.[0] &&
          nowPlaying.map((movie) => <span key={movie.id}>{movie.title}</span>)}
      </Section>
      <Section title="UpComing Movies">
        {upcoming?.[0] &&
          upcoming.map((movie) => <span key={movie.id}>{movie.title}</span>)}
      </Section>
      <Section title="Popular Movies">
        {popular?.[0] &&
          popular.map((movie) => <span key={movie.id}>{movie.title}</span>)}
      </Section>
    </>
  );

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default HomePresenter;
