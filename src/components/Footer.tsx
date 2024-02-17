import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const socialAccounts = [
  {
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/dafolk",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/dafolk/",
  },
  {
    name: "Twitter",
    icon: faXTwitter,
    link: "https://twitter.com/dafolk_",
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:martinlee.kss@gmail.com",
  },
  {
    name: "Discord",
    icon: faDiscord,
    link: "https://discord.com/users/487717513069854751",
  },
];

export default function Footer() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  function handleSubmit() {
    setEmail("");
    setNote("");
    setSnackbarOpen(true);
  }

  return (
    <footer id="footer">
      <Box
        sx={{
          color: "secondary.main",
          bgcolor: "primary.main",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          pt: 5,
          flexDirection: "column",
          px: { xs: 2, lg: 10 },
          position: "relative",
        }}
      >
        <Typography sx={{ fontSize: "2em" }}>Contact Me</Typography>
        <Divider sx={{ width: "100%", bgcolor: "secondary.main" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ my: 5 }}
          justifyContent={"space-between"}
          alignItems={{ xs: "start", sm: "end" }}
          gap={7}
        >
          <Stack direction={"column"} gap={2} width={{ xs: "100%", sm: "50%" }}>
            <Typography>Let me contact you.</Typography>
            <InputBase
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                bgcolor: theme.palette.mode === "light" ? "#454545" : "#ACABA7",
                borderRadius: "12px",
                fontSize: "0.875em",
                color: "secondary.main",
                padding: 1.1,
                "&.Mui-focused": {
                  border: `solid 2px`,
                  borderRadius: "12px",
                  outline: 0,
                },
              }}
            />
            <InputBase
              placeholder="Note"
              value={note}
              multiline
              rows={4}
              onChange={(e) => setNote(e.target.value)}
              sx={{
                borderRadius: "12px",
                bgcolor: theme.palette.mode === "light" ? "#454545" : "#ACABA7",
                fontSize: "0.875em",
                color: "secondary.main",
                padding: 1.1,
                "&.Mui-focused": {
                  border: `solid 2px`,
                  borderRadius: "12px",
                  outline: 0,
                },
              }}
            />
            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "fit-content",
                bgcolor: "secondary.main",
                color: "primary.main",
                borderRadius: "12px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Snackbar
              open={snackbarOpen}
              onClose={() => setSnackbarOpen(false)}
              message="I love snacks"
              autoHideDuration={2000}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Please enter a valid email!
              </Alert>
            </Snackbar>
          </Stack>
          <Stack gap={3}>
            <Typography>Reach me out from these:</Typography>
            <Stack direction={"row"} sx={{ fontSize: "2em", gap: 2, ml: -1 }}>
              {socialAccounts.map((item, key) => (
                <a href={item.link}>
                  <IconButton sx={{ color: "secondary.main" }}>
                    <FontAwesomeIcon key={key} icon={item.icon} bounce />
                  </IconButton>
                </a>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ width: "100%", bgcolor: "secondary.main" }} />
        {/* <Box sx={{ my: 1 }}>
          <ParallaxText baseVelocity={5} color={colors.red}>
            MYANMAR IS NOT IN PEACE!
          </ParallaxText>
        </Box> */}
      </Box>
    </footer>
  );
}
