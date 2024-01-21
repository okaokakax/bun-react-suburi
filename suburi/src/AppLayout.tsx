import { Outlet } from 'react-router-dom';
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './AppLayout.css';

import Header from './components/Header';

export default function AppLayout({
    children,
}: {
    children?: React.JSX.Element;
}) {
    return (
        <Grid container direction="column">
            <Grid>
                <Header />
            </Grid>
            <Container disableGutters>{children ?? <Outlet />}</Container>
        </Grid>
    );
}
