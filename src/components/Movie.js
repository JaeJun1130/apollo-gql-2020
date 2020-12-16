import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Contaner = styled.div`
    height: 420px;
    width: 90%;
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

const Movie = ({ id, poster }) => {
    return (
        <Contaner>
            <Link to={`/${id}`}>
                <Poster src={poster} />
            </Link>
        </Contaner>
    );
};

export default Movie;
