import { Box } from "@mui/material";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        color: "primary.main",
        px: { xs: 2, lg: 10 },
        mt: "10vh",
        flexDirection: "column",
      }}
    >
      <Hero />
      <About />
      <Journey />
    </Box>
  );
}
