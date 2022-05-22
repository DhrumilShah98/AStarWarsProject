import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";

const CharacterInfo = ({ starWarsCharacter }) => {
    const STAR_WARS_BANNER = "https://images.hdqwalls.com/wallpapers/star-wars-logo-4k-qw.jpg";

    return (
        <Card elevation={6}>
            <CardContent>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{starWarsCharacter.name}</Typography>
                <Typography variant="body2" component="body2">Star Wars Character</Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="200"
                src={STAR_WARS_BANNER}
                alt="Star Wars Banner" />
            <CardContent>
                <List dense={true}>
                    <ListItem>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Height (cm)</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.height}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Weight (kg)</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.mass}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Hair Color</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.hair_color}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Skin Color</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.skin_color}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Gender</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.gender}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Birth Year</Typography>}
                                    secondary={<Typography variant="body1" component="body1">{starWarsCharacter.birth_year}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default CharacterInfo;