import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 32px;
`;

export default () => (
    <Container>
        <span role="image" aria-label="Loading">
            💌Loading...
        </span>
    </Container>
);
