import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 14px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  bottom: 4px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  console.log(imageUrl);
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : "http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"
            }
          />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐
            </span>
            {`${rating} / 10`}
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string,
  title: propTypes.string,
  rating: propTypes.number,
  year: propTypes.string,
  isMovie: propTypes.bool,
};

export default Poster;
