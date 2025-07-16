import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const StyledSkillBadge = styled(Card)(() => ({
        padding: "12px 16px",
        textAlign: "center",
        marginBottom: "10px",
        borderRadius: "12px",
        border: "2px solid transparent",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontWeight: 600,
        fontSize: "0.85rem",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        minHeight: "48px",
        '&:hover': {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }
    }));

    const skillsSet = [
        { name: "Javascript", color: "linear-gradient(135deg, #f7df1e 0%, #ffeb3b 100%)", textColor: "#000", icon: <JavascriptIcon sx={{ fontSize: "20px" }} /> },
        { name: "Python", color: "linear-gradient(135deg, #3776ab 0%, #4dabf7 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "20px" }} /> },
        { name: "Flutter", color: "linear-gradient(135deg, #02569B 0%, #0175c2 100%)", textColor: "#fff", icon: <PhoneAndroidIcon sx={{ fontSize: "20px" }} /> },
        { name: "React", color: "linear-gradient(135deg, #61dafb 0%, #21c7fc 100%)", textColor: "#000", icon: <WebIcon sx={{ fontSize: "20px" }} /> },
        { name: "Django", color: "linear-gradient(135deg, #092e20 0%, #0f5132 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "20px" }} /> },
        { name: "Node.js", color: "linear-gradient(135deg, #339933 0%, #68c43a 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "20px" }} /> },
        { name: "PostgreSQL", color: "linear-gradient(135deg, #336791 0%, #4c9aca 100%)", textColor: "#fff", icon: <StorageIcon sx={{ fontSize: "20px" }} /> },
        { name: "Git", color: "linear-gradient(135deg, #f05032 0%, #ff6b4a 100%)", textColor: "#fff", icon: <GitHubIcon sx={{ fontSize: "20px" }} /> },
        { name: "Docker", color: "linear-gradient(135deg, #2496ed 0%, #0db7ed 100%)", textColor: "#fff", icon: <CloudIcon sx={{ fontSize: "20px" }} /> },
        { name: "HTML/CSS", color: "linear-gradient(135deg, #e34f26 0%, #f06529 100%)", textColor: "#fff", icon: <WebIcon sx={{ fontSize: "20px" }} /> },
        { name: "Firebase", color: "linear-gradient(135deg, #ffca28 0%, #ffc107 100%)", textColor: "#000", icon: <CloudIcon sx={{ fontSize: "20px" }} /> },
        { name: "Figma", color: "linear-gradient(135deg, #f24e1e 0%, #ff6250 100%)", textColor: "#fff", icon: <DesignServicesIcon sx={{ fontSize: "20px" }} /> }
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">3+ years</Typography>
                                <Typography textAlign="center">Full Stack Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Postgraduate Degree</Typography>
                                <Typography textAlign="center">Software Engineering</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                       I'm Clodomilson Silva, a developer with a passion for turning ideas into real digital solutions. On my GitHub account, clodomilson-silva, I share projects that demonstrate my versatility with technologies such as Python, JavaScript, PHP and modern frameworks-with special attention to code quality, versioning and automation Recently, I've developed projects that reflect my ability to build interactive interfaces with good practices and responsiveness. Other repositories include practical implementations, tests and clear documentation, showing my commitment to each stage of the development cycle. In practice, I apply: Effective versioning (Git/GitHub): well-organized history, consistent commits and use of branches to control functionality. Front-end & back-end development: clean integration between logic and interface, with attention to reusable components. Testing and maintenance: although many of my repositories are personal projects, I already include testing and documentation, using detailed README, setup via Docker and best deployment practices. As an Instructor at Senac Maranhão, I bring this experience to teaching, preparing new developers for the challenges of the market with practical cases, constant feedback and a focus on professional development.

                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledSkillBadge 
                                    variant="outlined"
                                    sx={{
                                        background: skill.color,
                                        color: skill.textColor,
                                        border: "none"
                                    }}
                                >
                                    {skill.icon}
                                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                                        {skill.name}
                                    </Typography>
                                </StyledSkillBadge>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection