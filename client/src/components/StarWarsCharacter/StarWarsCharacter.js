import React from "react";
import { Container, Grid } from "@mui/material";
import CharacterInfo from "./CharacterInfo";
import HomePlanet from "./HomePlanet";

const StarWarsCharacter = ({ starWarsCharacter }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <CharacterInfo starWarsCharacter={starWarsCharacter} />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} >
                    <HomePlanet homeWorld={starWarsCharacter.home_world} />
                </Grid>
            </Grid>
        </Container >
    );
};

export default StarWarsCharacter;