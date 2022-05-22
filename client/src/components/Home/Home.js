import React from "react";
//import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import StarWarsCharacter from "../StarWarsCharacter/StarWarsCharacter";
//import * as api from "../../apis";
import { starWarsCharacterData } from "../../data/data";
import { Container, Paper, TextField } from "@mui/material";

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
        <Container>
            <Paper elevation={6} sx={{ marginBottom: 2 }}>
                <TextField
                    id="characterIDTextField"
                    label="Enter Character Id"
                    variant="outlined"
                    fullWidth
                    required />
            </Paper>
            {(starWarsCharacterData == null) ? <Loading /> : <StarWarsCharacter starWarsCharacter={starWarsCharacterData} />}
        </Container>
    );
};

export default Home;