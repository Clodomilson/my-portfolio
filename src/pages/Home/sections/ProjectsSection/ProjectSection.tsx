import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import projeto01 from "../../../../assets/images/projeto01.png";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto EcoPoint",
            subtitle: "Mar 2025 - Jun 2025",
            srcImg: projeto01,
            description: "Aplicação web para localizar e cadastrar pontos de coleta de materiais recicláveis, com mapa interativo, cadastro de pontos e suporte a PWA.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Node.js, Firebase",
            websiteURL: "https://ecopoint-web.vercel.app/",
            codeURL: "https://github.com/clodomilson-silva/Ecopoint_web",
        },
        {
            title: "Projeto Exemplo 2",
            subtitle: "Jan 2024 - Mar 2024",
            srcImg: "https://via.placeholder.com/400x200/232323/ffffff?text=Projeto+2",
            description: "Outro projeto exemplo. Aqui você pode descrever um projeto diferente, suas tecnologias, aprendizados e resultados obtidos durante o desenvolvimento.",
            technologies: "Technologies: TypeScript, React, Node.js, MongoDB",
            websiteURL: "https://exemplo2.com/",
            codeURL: "https://github.com/seuusuario/projeto2",
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