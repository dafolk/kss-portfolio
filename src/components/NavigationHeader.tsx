import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { colors } from "../app/assetData";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

type HomeProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

export default function NavigationHeader({ ColorModeContext }: HomeProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sections = [
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <nav
      style={{
        backgroundColor:
          theme.palette.mode === "light" ? colors.white : colors.black,
        width: "100%",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "10vh",
          alignItems: "center",
          px: { xs: 2, lg: 10 },
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{
            mr: 1,
            display: { xs: "flex", md: "none" },
            color: "primary.main",
          }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {sections.map((item, key) => (
            <MenuItem key={key} onClick={handleClose}>
              <Typography color="primary.main">{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Typography
          sx={{
            flexGrow: 1,
            // display: { xs: "none", md: "flex" },
            color: "primary.main",
            fontSize: "24px",
          }}
        >
          LOGO
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 2, md: 5 },
          }}
        >
          {sections.map((item, key) => (
            <a
              href={item.link}
              key={key}
              style={{
                textDecoration: "none",
                display: "block",
                height: "100%",
                color:
                  theme.palette.mode === "light" ? colors.black : colors.white,
              }}
            >
              {item.name}
            </a>
          ))}
        </Box>
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ color: "primary.main", ml: { xs: 2, md: 10 } }}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>

      {/* <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: 5,
        }}
      >
        {sections.map((item, key) => (
          <a
            href={item.link}
            key={key}
            style={{
              textDecoration: "none",
              display: "block",
              height: "100%",
              color:
                theme.palette.mode === "light" ? colors.black : colors.white,
            }}
          >
            {item.name}
          </a>
        ))}
      </Box> */}
    </nav>
  );
}
