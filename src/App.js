import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#000',
  borderColor: '#000'
}));





function App() {
  return (
    <Container maxWidth="md" >
      <Grid container sx={{ justifyContent: "center", padding: '40px' }}  >
        <Grid item xs={12} sx={{ textAlign: "center" }} >
          Hello World

        </Grid>
        <Grid item xs={12} sx={{
          minHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }} >
          <ColorButton variant="outlined" >Create Your First Task ;)</ColorButton>

        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
