import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import "./AppLayout.css";

import Header from "./components/Header";

export default function AppLayout({children}) {
  return (
    <Grid container direction="column">
        <Grid>
            <Header />
        </Grid>
        <Container disableGutters>
          {children ?? <Outlet />}
        </Container>
    </Grid>
  );
}
