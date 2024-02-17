import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import { programmingTools } from "../assets/data";

export default function Skills() {
  return (
    <section id="skills">
      <Box
        sx={{
          mt: "10vh",
          bgcolor: "#433633",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5,
          mx: { xs: -2, lg: -10 },
        }}
      >
        <Typography variant="h4" textAlign={"center"} color={"#DECBB7"}>
          Skills
        </Typography>
        <Masonry
          columns={{ xs: 3, sm: 5, md: 7, lg: 9, xl: 11 }}
          spacing={5}
          sx={{ mt: 5 }}
        >
          {programmingTools.map((item, index) => (
            <Box
              sx={{
                width: 100,
                height: 100 + Math.floor(Math.random() * 150),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                key={index}
                animate={{ rotate: 360 }} // Rotate 360 degrees
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Repeat the animation infinitely
                style={{
                  width: 100,
                  height: 100,
                }}
              >
                {item}
              </motion.div>
            </Box>
          ))}
        </Masonry>
      </Box>
    </section>
  );
}
