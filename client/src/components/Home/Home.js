import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import StarWarsCharacter from "../StarWarsCharacter/StarWarsCharacter";
import Loading from "../Loading/Loading";
import * as api from "../../apis";

const Home = () => {
    const [formData, setFormData] = useState({ characterIdValue: "2", characterIdError: "", isCharacterIdValid: true });
    const [starWarsCharacter, setStarWarsCharacter] = useState(null);

    // Calls the API first time (only called one time) when the page loads with initial character id = 2.
    useEffect(() => {
        getStarWarsCharacterById(formData.characterIdValue);
        // eslint-disable-next-line
    }, []);

    /**
     * Gets the star wars character data for the provided id. This method further triggers the UI update.
     * @param {String} characterId - Id of the star wars character.
     */
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
            setFormData({
                ...formData,
                characterIdError: error.response.data.message,
                isCharacterIdValid: false
            });
        }
    };

    /**
     * Gets the truthiness of the character id entered.
     * @returns true if character id is valid otherwise false.
     */
    const validateFormData = () => {
        return formData.isCharacterIdValid;
    };

    /**
     * Validates the entered star wars character id.
     * @param {Object} e - Event object.
     */
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

    /**
     * Called when the data in the form changes. (i.e., when the character id changes).
     * @param {Object} e - Event object.
     */
    const onChange = (e) => {
        validate(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Submits the form.
     * @param {Object} e - Event object.
     */
    const submit = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            setStarWarsCharacter(null);
            getStarWarsCharacterById(formData.characterIdValue);
        }
    };

    return (
        <Container>
            <form onSubmit={submit} noValidate style={{ width: "100%", display: "flex", flexFlow: "row wrap", alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={9} sm={10} md={10} lg={10}>
                        <TextField
                            type="text"
                            id="characterIdValue"
                            name="characterIdValue"
                            label="Character Id"
                            variant="outlined"
                            autoComplete="off"
                            value={formData.characterIdValue}
                            error={!formData.isCharacterIdValid}
                            helperText={formData.characterIdError}
                            onChange={onChange}
                            margin="normal"
                            fullWidth
                            required />
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} lg={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={!validateFormData()}
                            sx={{ marginTop: "15px", height: "56px" }}
                            fullWidth>
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