import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledAppBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        backdropFilter: "blur(10px)",
        zIndex: 1100,
    }))

    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        cursor: "pointer",
        transition: "all 0.3s ease",
        borderRadius: "8px",
        margin: "0 4px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "translateY(-2px)",
        }
    }))

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Offset para compensar a altura do navbar fixo
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <StyledAppBar position="fixed">
                <StyledToobar>
                    <StyledMenuItem onClick={() => scrollToSection('home')}>
                        Home
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => scrollToSection('about')}>
                        About
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => scrollToSection('skills')}>
                        Skills
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => scrollToSection('projects')}>
                        Projects
                    </StyledMenuItem>
                </StyledToobar>
            </StyledAppBar>
        </>
    )
}

export default NavBar