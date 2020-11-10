import React from "react";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 20px;
`;

const Form = styled.form`
  width: 100%;
  font-size: 28px;
  margin-bottom: 50px;
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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults?.[0] && (
            <Section title="TV Show Results">
              {tvResults.map((show) => (
                <span key={show.id}>{show.name}</span>
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
