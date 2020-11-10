import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import propTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 50px;
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  border-radius: 4px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Reactflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message error={error} color={"#c0392b"} />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Reactflix
        </title>
      </Helmet>
      <BackDrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : require("../../assets/no-poster.png")
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/no-poster.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  movieResults: propTypes.object,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default DetailPresenter;
