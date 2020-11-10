import React from "react";
import propTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV shows | Reactflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Section title="Top Rated Shows">
          {topRated?.[0] &&
            topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date?.substring(0, 4)}
              />
            ))}
        </Section>
        <Section title="Airing Today ">
          {airingToday?.[0] &&
            airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date?.substring(0, 4)}
              />
            ))}
        </Section>
        <Section title="Popular Shows">
          {popular?.[0] &&
            popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date?.substring(0, 4)}
              />
            ))}
        </Section>
        {error && <Message text={error} color={"#e74c3c"} />}
      </Container>
    )}
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
