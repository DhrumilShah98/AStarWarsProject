import React from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

const HomePlanet = ({ homeWorld }) => {
    return (
        <Paper elevation={6} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Home Planet</Typography>
            <List dense={true} disablePadding={true}>
                <ListItem disablePadding={true}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <ListItemText
                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Planet Name</Typography>}
                                secondary={<Typography variant="body1" component="body1">{homeWorld.name}</Typography>} />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <ListItemText
                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Planet Terran</Typography>}
                                secondary={<Typography variant="body1" component="body1">{homeWorld.terran}</Typography>} />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <ListItemText
                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Planet Population</Typography>}
                                secondary={<Typography variant="body1" component="body1">{homeWorld.population}</Typography>} />
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Paper>
    );
};

export default HomePlanet;