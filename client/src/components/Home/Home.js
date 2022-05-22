import React from "react";
//import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import StarWarsCharacter from "../StarWarsCharacter/StarWarsCharacter";
//import * as api from "../../apis";
import { starWarsCharacterData } from "../../data/data";

const Home = () => {
    //const [starWarsCharacter, setStarWarsCharacter] = useState(null);

    // const getStarWarsCharacterById = async () => {
    //     const payload = await api.getStarWarsCharacterById(1);
    //     const _starWarsCharacter = (payload.status === api.SC200_OK) ? payload.data.data : null;
    //     setStarWarsCharacter(_starWarsCharacter);
    // };

    // useEffect(() => {
    //     //getStarWarsCharacterById();
    // }, []);

    return (
        (starWarsCharacterData == null) ? <Loading /> : <StarWarsCharacter starWarsCharacter={starWarsCharacterData} />
    );
};

export default Home;