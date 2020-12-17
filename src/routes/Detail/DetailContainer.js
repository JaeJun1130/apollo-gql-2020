import React from "react";
import DetailPersenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const GET_MOVIE = gql`
    query movie($id: Int!) {
        movie(id: $id) {
            title
            medium_cover_image
            description_intro
            language
            rating
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`;

const DetailContainer = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id: parseInt(id) } });
    console.log(loading, error, data);
    return (
        <div>
            <DetailPersenter loading={loading} data={data} />
        </div>
    );
};

export default DetailContainer;
