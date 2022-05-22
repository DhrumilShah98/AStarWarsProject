import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import CharacterInfo from "./CharacterInfo";

const StarWarsCharacter = ({ starWarsCharacter }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CharacterInfo starWarsCharacter={starWarsCharacter} />
                </Grid>
                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <Card elevation={6}>
                        <CardContent>
                            <Typography variant="h3" sx={{ fontWeight: "bold" }}>{starWarsCharacter.name}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    );
};

export default StarWarsCharacter;