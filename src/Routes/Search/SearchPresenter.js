import React from "react";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import styled from "styled-components";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;

const Form = styled.form`
  width: 100%;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV shows"
          value={searchTerm}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults?.[0] && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
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
          )}
          {tvResults?.[0] && (
            <Section title="TV Show Results">
              {tvResults.map((show) => (
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
          )}
          {error && <Message text={error} color={"#e74c3c"} />}
          {movieResults &&
            movieResults?.[0] === undefined &&
            tvResults &&
            tvResults?.[0] === undefined &&
            !error && (
              <Message
                text={"Not Found Any Movies or TV Shows"}
                color={"#7f8c8d"}
              />
            )}
        </>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired,
};

export default SearchPresenter;
