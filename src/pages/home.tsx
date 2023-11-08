import { Box } from "@mui/material";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        color: "primary.main",
        p: 0,
        mt: "10vh",
      }}
    >
      <Hero />
    </Box>
  );
}
