import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import StarWarsCharacter from "../StarWarsCharacter/StarWarsCharacter";
import Loading from "../Loading/Loading";
import * as api from "../../apis";

const Home = () => {
    const [formData, setFormData] = useState({ characterIdValue: 2, characterIdError: "", isCharacterIdValid: true });
    const [starWarsCharacter, setStarWarsCharacter] = useState(null);

    useEffect(() => {
        getStarWarsCharacterById(formData.characterIdValue);
        // eslint-disable-next-line
    }, []);

    const getStarWarsCharacterById = async (characterId) => {
        try {
            const payload = await api.getStarWarsCharacterById(characterId);
            if (payload.status === api.SC200_OK &&
                payload.data.status === api.SC200_OK &&
                payload.data.data !== null) {
                setStarWarsCharacter(payload.data.data);
            } else {
                setFormData({
                    ...formData,
                    characterIdError: "Something went wrong. Please try again.",
                    isCharacterIdValid: false
                });
            }
        } catch (error) {
            if (error.status === api.SC404_NOT_FOUND) {
                setFormData({
                    ...formData,
                    characterIdError: "No character found for this id.",
                    isCharacterIdValid: false
                });
            }
        }
    };

    const validateFormData = () => {
        return formData.isCharacterIdValid;
    };

    const validate = (e) => {
        switch (e.target.name) {
            case "characterIdValue":
                const isNumberCorrect = RegExp(/^[1-9][0-9]*$/).test(e.target.value);
                if (e.target.value === "" || e.target.value === null) {
                    formData["characterIdError"] = "Character id is required."
                    formData["isCharacterIdValid"] = false;
                } else if (!isNumberCorrect) {
                    formData["characterIdError"] = "Please enter a valid character id."
                    formData["isCharacterIdValid"] = false;
                } else {
                    formData["characterIdError"] = ""
                    formData["isCharacterIdValid"] = true;
                }
                break;
            default:
                break;
        }
    }

    const onChange = (e) => {
        validate(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            getStarWarsCharacterById(formData.characterIdValue);
        }
    };

    return (
        <Container>
            <form onSubmit={submit} noValidate style={{ width: "100%", display: "flex", "flex-flow": "row wrap", "align-items": "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={9} sm={10} md={10} lg={10}>
                        <TextField
                            id="characterIdValue"
                            type="text"
                            name="characterIdValue"
                            label="Character Id"
                            variant="outlined"
                            autoComplete="off"
                            value={formData.characterIdValue}
                            onChange={onChange}
                            error={!formData.isCharacterIdValid}
                            helperText={formData.characterIdError}
                            margin="normal"
                            fullWidth
                            required />
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} lg={2}>
                        <Button variant="contained"
                            size="large"

                            disabled={!validateFormData()}
                            fullWidth
                            type="submit"
                            sx={{ marginTop: "15px", height: "56px" }}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {(starWarsCharacter == null) ? <Loading /> : <StarWarsCharacter starWarsCharacter={starWarsCharacter} />}
        </Container >
    );
};

export default Home;