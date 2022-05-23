import React from "react";
import { Grid, Box } from "@mui/material";
import CharacterInfo from "./CharacterInfo";
import Species from "./Species";
import HomePlanet from "./HomePlanet";
import Films from "./Films";

const StarWarsCharacter = ({ starWarsCharacter }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <Box>
                    <CharacterInfo starWarsCharacter={starWarsCharacter} />
                </Box>
                <Box marginTop={2}>
                    <Species species={starWarsCharacter.species} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box>
                    <HomePlanet homeWorld={starWarsCharacter.home_world} />
                </Box>
                <Box marginTop={2}>
                    <Films films={starWarsCharacter.films} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default StarWarsCharacter;