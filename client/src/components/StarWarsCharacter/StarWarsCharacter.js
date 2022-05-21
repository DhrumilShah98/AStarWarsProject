import React, { useState, useEffect } from "react";
import * as api from "../../apis";

const StarWarsCharacter = () => {
    const [starWarsChar, setStarWarsChar] = useState(null);

    const getStarWarsCharacterById = async () => {
        const payload = await api.getStarWarsCharacterById(2);
        const _starWarsChar = (payload.status === api.SC200_OK) ? payload.data.data : null;
        setStarWarsChar(_starWarsChar);
    };

    useEffect(() => {
        getStarWarsCharacterById();
    }, []);

    return (
        (starWarsChar == null) ?
            <div>Hello</div> :
            <div>{starWarsChar.name}</div>
    );
};

export default StarWarsCharacter;