import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import StarWarsCharacter from "../StarWarsCharacter/StarWarsCharacter";
import * as api from "../../apis";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
    const [formData, setFormData] = useState({ characterId: 2, isValid: true, error: "" });
    const [starWarsCharacter, setStarWarsCharacter] = useState(null);

    useEffect(() => {
        getStarWarsCharacterById(formData.characterId);
    });

    const getStarWarsCharacterById = async (id) => {
        const payload = await api.getStarWarsCharacterById(id);
        const _starWarsCharacter = (payload.status === api.SC200_OK) ? payload.data.data : null;
        if (_starWarsCharacter !== null) {
            setStarWarsCharacter(_starWarsCharacter);
        }
    };

    const validateFormData = () => {
        return formData.isValid;
    };

    const submit = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            console.log("Hello");
            getStarWarsCharacterById(formData.characterId);
        }
    };

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container>
            <form onSubmit={submit} noValidate style={{ width: "100%", display: "flex", "flex-flow": "row wrap", "align-items": "center" }}>
                <Grid container spacing={2} direction="row"
                    alignItems="center"
                    justifyContent="center">
                    <Grid item xs={9} sm={10} md={10} lg={10}>
                        <TextField
                            id="characterId"
                            type="text"
                            name="characterId"
                            label="Character ID [1 - 83]"
                            variant="outlined"
                            autoComplete="off"
                            value={formData.characterId}
                            onChange={onChange}
                            error={!formData.isValid}
                            helperText={formData.error}
                            margin="normal"
                            fullWidth
                            required />
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} lg={2}>
                        <Button variant="contained" size="large" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {(starWarsCharacter == null) ? <Loading /> : <StarWarsCharacter starWarsCharacter={starWarsCharacter} />}
        </Container >
    );
};

export default Home;