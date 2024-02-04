import { NavLink } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5">
                    <HeaderLink to="/">Bun + Vite + React試作</HeaderLink>
                </Typography>
                <Button sx={{ ml: 2 }}>
                    <HeaderLink to="/about">About</HeaderLink>
                </Button>
                <Button sx={{ ml: 2 }}>
                    <HeaderLink to="/geolocation">Geolocation</HeaderLink>
                </Button>
                <Button sx={{ ml: 2 }}>
                    <HeaderLink to="https://d9nq8b6kmpzt6.cloudfront.net/">
                        Svelte素振り
                    </HeaderLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

const HeaderLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
`;
