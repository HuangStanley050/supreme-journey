import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

export default function App() {
  const fetchMovieData = async () => {
    const data = await axios.get("http://localhost:8000/movies");
    console.log(data);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
          }}
        />
      </Container>
    </React.Fragment>
  );
}
