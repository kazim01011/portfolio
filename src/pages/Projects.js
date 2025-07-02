import React from 'react';
import { Grid } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => {
    return (
        <Grid container spacing={6} justifyContent="center">
            {projectConfig.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <CardItem item={item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Projects;
