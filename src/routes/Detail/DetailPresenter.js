import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";

const Contaier = styled.div`
    height: 100vh;
    background: linear-gradient(-45deg, #dd04ff -50%, #ed6648);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;
const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 10px;
`;
const SubTitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
    text-transform: uppercase;
`;
const Description = styled.p`
    font-size: 28px;
`;

const Colum = styled.div`
    margin-left: 10px;
    width: 50%;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
`;

const DetailPersenter = ({ loading, data }) => {
    return (
        <>
            <Contaier>
                <Colum>
                    <Title>{loading ? <Loader /> : data.movie.title}</Title>
                    <>
                        <SubTitle>
                            {data?.movie?.language} ▪ {data?.movie?.rating}
                        </SubTitle>
                        <Description>{data?.movie?.description_intro}</Description>
                    </>
                </Colum>
                {!loading && <Poster src={data?.movie?.medium_cover_image}></Poster>}
            </Contaier>
        </>
    );
};

export default DetailPersenter;
