import { Box, Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import HeroIcon from "./HeroIcon";
import { useState } from "react";

export default function Hero() {
  const [isIntroRendered, setIntroRendered] = useState(false);
  const [isNameRendered, setNameRendered] = useState(false);

  return (
    <section id="hero">
      <Box
        sx={{
          color: "primary.main",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          justifyContent: { xs: "space-evenly", sm: "space-between" },
          gap: 5,
        }}
      >
        <HeroIcon display={{ xs: "flex", sm: "none" }} fontSize="2em" />
        <Stack
          direction={"column"}
          width={{ xs: "100%", sm: "50%" }}
          height={{ xs: "40%", sm: "30%" }}
        >
          <TypeAnimation
            className="custom-type-animation-cursor"
            cursor={false}
            sequence={[
              "Hey there!",
              (el) => el?.classList.remove("custom-type-animation-cursor"),
              () => setIntroRendered(true),
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={0}
          />
          <Box
            sx={{ visibility: isIntroRendered ? "visible" : "hidden", my: 3 }}
          >
            <TypeAnimation
              className="custom-type-animation-cursor"
              cursor={false}
              sequence={[
                2000,
                "I'm Kaung Soe San.",
                2000,
                "You can call me Martin.",
                (el) => el?.classList.remove("custom-type-animation-cursor"),
                () => setNameRendered(true),
                6000,
                (el) => el?.classList.add("custom-type-animation-cursor"),
              ]}
              wrapper="span"
              speed={20}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </Box>
          <Box sx={{ visibility: isNameRendered ? "visible" : "hidden" }}>
            <TypeAnimation
              className="custom-type-animation-cursor"
              cursor={false}
              sequence={[
                10000,
                "A web developer who turns ideas into engaging online experiences. Let my code do the talking - let's build something awesome!",
                // 1000,
                // "I build attractive",
                // 1000,
                // `I build responsive and attractive websites.\nI am consistently engaged in ongoing learning and actively incorporating new knowledge into the development of my professional skills.`,
                (el) => el?.classList.remove("custom-type-animation-cursor"),
              ]}
              wrapper="span"
              speed={70}
              style={{
                fontSize: "1em",
                display: "inline-block",
                whiteSpace: "pre-line",
              }}
              repeat={0}
            />
          </Box>
        </Stack>
        <HeroIcon display={{ xs: "none", sm: "flex" }} fontSize="5em" />
      </Box>
    </section>
  );
}
