import React from "react";
import HomePersenter from "./HomePresenter";
import { gql, useQuery } from "@apollo/client";

export const GET_MOVIES = gql`
    query {
        movies(limit: 100, rating: 1) {
            id
            title
            medium_cover_image
            rating
        }
    }
`;

const HomeContainer = () => {
    const { loading, error, data } = useQuery(GET_MOVIES); //useQuery후크가 실행 loading되면 error, 및 data속성 이 포함 된 결과 개체가 반환 됩니다.
    return (
        <div>
            <HomePersenter loading={loading} error={error} data={data} />
        </div>
    );
};

export default HomeContainer;
