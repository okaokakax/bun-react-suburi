import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5">
                    <HeaderLink to="/">Bun + Vite + React</HeaderLink>
                </Typography>
                <Button sx={{ ml: 2 }}>
                    <HeaderLink to="/about">About</HeaderLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

const HeaderLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
