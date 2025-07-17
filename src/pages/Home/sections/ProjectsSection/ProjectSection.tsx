import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import projeto01 from "../../../../assets/images/projeto01.png";
import projeto02 from "../../../../assets/images/projeto02.png";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "EcoPoint Project",
            subtitle: "Mar 2025 - in progress",
            srcImg: projeto01,
            description: "Web application to locate and register collection points for recyclable materials, with interactive map, point registration and PWA support.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Node.js, Firebase",
            websiteURL: "https://ecopoint-web.vercel.app/",
            codeURL: "https://github.com/clodomilson-silva/Ecopoint_web",
        },
        {
            title: "School System Project",
            subtitle: "Jun 2025 - in progress",
            srcImg: projeto02,
            description: "Complete school management system developed with Node.js + Express on the backend, React + TypeScript on the frontend and Firebase Firestore as the database.",
            technologies: "Technologies: TypeScript, React, Node.js, Express, Firebase",
            websiteURL: "https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg",
            codeURL: "https://github.com/clodomilson-silva/sistema-escolarfreq",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection