import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import FUEL_ECON_IMG from '../../assets/img/portfolio/data_analytics/fuel_economy.png';
import WEB_DEV_IMG_NIA from '../../assets/img/portfolio/web_development/web_dev_nia_document_tracker.png';
import WEB_DEV_IMG from '../../assets/img/portfolio/web_development/web_dev.png';
import './portfolio.css';

const projects = [
    { 
        title: 'Fuel Economy', 
        type: 'Tableau Dashboard', 
        year: 2025,
        description: 
            'A dashboard designed to analyze and visualize fuel economy data from the U.S. EPA, offering insights into the efficiency ' + 
            ' of vehicles over time. This currently focuses exclusively on conventional internal combustion engine (ICE) vehicles,' + 
            ' excluding hybrids and electric models.', 
        tech:'Tableau',
        githubLink: '#', 
        liveLink: 'https://public.tableau.com/app/profile/lexber.cabanlong/viz/FuelEconomy_17499296490290/Overview', 
        image: FUEL_ECON_IMG 
    },
    { 
        title: 'Portfolio Website', 
        type: 'Web Development', 
        year: 2025,
        description: 
            'If you are here, then you are already viewing my portfolio. ' +
            'I wanted to learn how to develop websites using React, so I did this portfolio using React. ' +
            'It is a responsive and user-friendly website that should work on any device.' , 
        tech:'React.js, Material UI, Tailwind',
        githubLink: 'https://github.com/LexberCabanlong/lex--portfolio', 
        liveLink: 'https://portfolio-lex.vercel.app/', 
        image: WEB_DEV_IMG 
    },
    { 
        title: 'Document Tracking Information System', 
        type: 'Web Development', 
        year: 2024,
        description: 
            'It is a document tracking information system designed to ' +
            'manage and monitor the movement of documents within an office. ' +
            'The system leverages JavaScript, HTML, PHP, and MySQL to efficiently ' +
            'track and store document information, ensuring smooth inter-office ' +
            'communication and document flow.', 
        tech:'JavaScript, HTML, PHP, MySQL',
        githubLink: '#', 
        liveLink: '#', 
        image: WEB_DEV_IMG_NIA 
    },
];



const ProjectShowcase = () => {
    return (
        <div id='portfolio' className='container_portfolio'>
            <h1 className="text-emphasis-color section-title">My Projects</h1>
            <Grid container spacing={4} padding={4}>
                {projects.map((project, idx) => (
                    <Grid item key={idx} xs={12} sm={6} md={4}>
                        <Card elevation={3} sx={{ borderRadius: 3, width: '100%', maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={project.image}
                                alt={project.title}
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container without stretching
                            />
                            <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {project.title}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary" 
                                sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
                            >
                                {project.type}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary" 
                                sx={{ fontSize: '0.8rem', color: 'text.secondary' }}
                            >
                                {project.year}
                            </Typography>
                            <Typography 
                                gutterBottom
                                variant="body2" 
                                color="text.secondary" 
                                sx={{ fontSize: '0.75rem', color: 'text.disabled' }}
                            >
                                {project.tech}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={project.githubLink !== '#' ? project.githubLink : null}
                                    startIcon={<FaGithub />}
                                    target="_blank"
                                    disabled={project.githubLink === '#' || !project.githubLink}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    size="small"
                                    color="secondary"
                                    href={project.liveLink !== '#' ? project.liveLink : null}
                                    target="_blank"
                                    disabled={project.liveLink === '#' || !project.liveLink}
                                >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
        </div>
    );
};

export default ProjectShowcase;
