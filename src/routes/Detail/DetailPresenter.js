import React from "react";
import styled from "styled-components";

const Contaier = styled.div`
    height: 100vh;
    background: linear-gradient(-45deg, #dd04ff -50%, #ed6648);
    width: 100%;
`;

const Colum = styled.div``;

const Poster = styled.div``;

const DetailPersenter = ({ loading, data }) => {
    return (
        <>
            <Contaier>
                <Colum>NAME</Colum>
                {loading && <Poster></Poster>}
            </Contaier>
        </>
    );
};

export default DetailPersenter;
