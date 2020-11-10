import React from "react";
import Helmet from "react-helmet";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Home | Reactflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Section title="Now Playing Movies">
          {nowPlaying?.[0] &&
            nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date?.substring(0, 4)}
              />
            ))}
        </Section>
        <Section title="UpComing Movies">
          {upcoming?.[0] &&
            upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date?.substring(0, 4)}
              />
            ))}
        </Section>
        <Section title="Popular Movies">
          {popular?.[0] &&
            popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date?.substring(0, 4)}
              />
            ))}
        </Section>
        {error && <Message text={error} color={"#e74c3c"} />}
      </Container>
    )}
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
