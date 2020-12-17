import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Movie from "../../components/Movie";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.div`
    width: 100%;
    padding: 10px 0;
    background: linear-gradient(-45deg, #57cfb0, #2ab5d3);
    opacity: 0.6;
`;
const HeaderTitle = styled.a`
    width: 100%;
    font-family: "Langar", cursive;
    margin-left: 100px;
    font-size: 25px;
    color: white;
    text-decoration: none;
`;

const Topadbar = styled.div`
    width: 100%;
    height: 20vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(-45deg, #dd04ff -50%, #ed6648);

    opacity: 0.9;
`;
const TopadbarTitle = styled.h1`
    margin-top: 70px;
    font-size: 50px;
    color: white;
`;

const TopadbarSpan = styled.span`
    color: white;
`;

const Movies = styled.div`
    width: 80%;
    position: relative;
    top: -20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
`;

const HomePersenter = ({ loading, error, data }) => {
    console.log(data);
    return (
        <>
            <Wrapper>
                <Header>
                    <HeaderTitle href="/">React</HeaderTitle>
                </Header>
                <Topadbar>
                    <TopadbarTitle>Apollo Movie</TopadbarTitle>
                    <TopadbarSpan>JAE JUN</TopadbarSpan>
                </Topadbar>
                {loading && <Loader />}
                {!loading && data.movies && (
                    <Movies>
                        {data.movies.map((m) => (
                            <Movie key={m.id} id={m.id} poster={m.medium_cover_image} isLiked={m.isLiked} />
                        ))}
                    </Movies>
                )}
            </Wrapper>
        </>
    );
};

export default HomePersenter;
