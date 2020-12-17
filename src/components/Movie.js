import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!) {
        toggleLikeMovie(id: $id) @client
    }
`;

const Contaner = styled.div`
    height: 420px;
    width: 100%;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    overflow: hidden;
`;
const Poster = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;

    height: 100%;
    width: 100%;
`;

const Button = styled.button`
    position: absolute;
`;

const Movie = ({ id, poster, isLiked }) => {
    const [aa] = useMutation(LIKE_MOVIE, { variables: { id: parseInt(id) } });
    return (
        <Contaner>
            <Link to={`/${id}`}>
                <Poster src={poster} />
            </Link>
            <Button onClick={isLiked ? null : aa}>{isLiked ? "Unlike" : "Like"}</Button>
        </Contaner>
    );
};

export default Movie;
