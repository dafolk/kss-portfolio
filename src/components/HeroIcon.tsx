import { Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CodeIcon from "@mui/icons-material/Code";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";

type HeroIconProps = {
  display: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  fontSize: string;
};

export default function HeroIcon({ display, fontSize }: HeroIconProps) {
  const [currentStage, setCurrentStage] = React.useState<
    "learn" | "code" | "produce"
  >("learn");

  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: { xs: "start", sm: "end" },
        display: display,
        width: { xs: "300px", sm: "50%" },
        height: { xs: "10%", sm: "100%" },
        fontSize: { sm: "8px", md: "14px" },
      }}
    >
      <TypeAnimation
        sequence={[
          "LEARN",
          () => setCurrentStage("learn"),
          1000,
          "CODE",
          () => setCurrentStage("code"),
          1000,
          `PRODUCE`,
          () => setCurrentStage("produce"),
          1000,
        ]}
        wrapper="span"
        speed={20}
        style={{
          fontSize,
          display: "inline-block",
        }}
        repeat={Infinity}
      />
      {currentStage === "learn" ? (
        <AutoStoriesIcon sx={{ fontSize }} />
      ) : currentStage === "code" ? (
        <CodeIcon sx={{ fontSize }} />
      ) : (
        <CloudUploadIcon sx={{ fontSize }} />
      )}
    </Stack>
  );
}
