import { Box, Stack, Typography, useTheme } from "@mui/material";
import { colors } from "../app/assetData";
import ParallaxText from "../app/globalComponents/ParallelText";

export default function ShowOff() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        px: "100px",
        color: "primary.main",
        width: "100%",
        overflow: "hidden",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Stack direction={"row"}>
        <Stack>
          <Typography
            sx={{ fontSize: "240px", wordSpacing: "12rem", lineHeight: 1 }}
          >
            WHAT AM I
          </Typography>

          <ParallaxText
            baseVelocity={-5}
            color={theme.palette.mode === "light" ? colors.red : colors.red}
            fontSize={240}
          >
            CAPABLE
          </ParallaxText>
          <Stack
            width={"34%"}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // gap={10}
          >
            <a href="#">
              <Box
                sx={{
                  bgcolor: "primary.main",
                  color: "secondary.main",
                  borderRadius: 5,
                }}
              >
                <Typography sx={{ fontSize: "50px", px: "100px", py: "30px" }}>
                  Explore My Journey
                </Typography>
              </Box>
            </a>
            <Typography sx={{ fontSize: "240px", lineHeight: 1 }}>
              OF ?
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
