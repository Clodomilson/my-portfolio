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
            title: "Projeto EcoPoint",
            subtitle: "Mar 2025 - em andamento",
            srcImg: projeto01,
            description: "Aplicação web para localizar e cadastrar pontos de coleta de materiais recicláveis, com mapa interativo, cadastro de pontos e suporte a PWA.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Node.js, Firebase",
            websiteURL: "https://ecopoint-web.vercel.app/",
            codeURL: "https://github.com/clodomilson-silva/Ecopoint_web",
        },
        {
            title: "Projeto Sistema Escolar",
            subtitle: "Jun 2025 - em andamento",
            srcImg: projeto02,
            description: "Sistema completo para gerenciamento escolar desenvolvido com Node.js + Express no backend, React + TypeScript no frontend e Firebase Firestore como banco de dados.",
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