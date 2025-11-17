import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderMenu from "./HeaderMenu";
import LanguageThemeToggle from "./LanguageThemeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_about"), path: "/about" },
    { name: t("nav_pricing"), path: "/pricing" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className="w-64 h-full bg-white flex flex-col p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="logo-wrapper flex align-items-center gap-2">
          <Typography
            variant="p"
            className="font-semibold tracking-[-1px] text-[1.5em]"
          >
            Spend <span className="logo-span">Right</span>
          </Typography>
        </div>

        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} className="hover:text-indigo-400">
            <Link to={item.path}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
        <button className="login-btn text-white text-[1em] font-semibold py-[.4em] px-[1.7em] rounded-[7px] cursor-pointer mt-[2em]">
          {t("login_btn")}
        </button>

        <div className="mt-[1.5em]">
          <LanguageThemeToggle />
        </div>
      </List>
    </Box>
  );

  return (
    <Box className="py-[1em]">
      <AppBar position="static" color="" elevation={0}>
        <Toolbar className="flex justify-between ">
          <div className="logo-wrapper flex align-items-center gap-2">
            <Typography
              variant="p"
              className="font-semibold tracking-[-1px] text-[1.5em]"
            >
              Spend <span className="logo-span">Right</span>
            </Typography>
          </div>

          <Box className="hidden md:flex space-x-6 gap-6">
            {navItems.map((item) => (
              <Typography
                key={item.name}
                variant="p"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1.1em",
                  fontWeight: "semibold",
                }}
                className="text-gray-700 cursor-pointer hover:text-indigo-400"
              >
                <Link to={item.path}>{item.name}</Link>
              </Typography>
            ))}
          </Box>

          <div className="hidden md:flex items-center gap-[.5em]">
            <button className="login-btn text-white text-[1em] font-semibold py-[.4em] px-[1.7em] rounded-[7px] cursor-pointer">
              {t("login_btn")}
            </button>
            <HeaderMenu />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className="hidden"
            >
              <MenuIcon className="text-gray-800 md:hidden" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor={isArabic ? "left" : "right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
