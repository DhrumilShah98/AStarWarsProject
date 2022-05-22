import React from "react";
import { Container, Grid, Box } from "@mui/material";
import CharacterInfo from "./CharacterInfo";
import HomePlanet from "./HomePlanet";

const StarWarsCharacter = ({ starWarsCharacter }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <CharacterInfo starWarsCharacter={starWarsCharacter} />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box>
                        <HomePlanet homeWorld={starWarsCharacter.home_world} />
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default StarWarsCharacter;