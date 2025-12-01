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
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderMenu from "./HeaderMenu";
import LanguageThemeToggle from "./LanguageThemeToggle";
import { useAppContext } from "../contexts/useAppContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const location = useLocation();

  const isArabic = i18n.language === "ar";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_about"), path: "/about" },
    { name: t("nav_receipts"), path: "/receipts" },
    { name: t("nav_pricing"), path: "/pricing" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={`w-64 h-full flex flex-col p-6 ${
        theme === "dark" ? "bg-dark-gray text-white" : "bg-white text-black"
      }`}
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
          <CloseIcon sx={{ color: theme === "light" ? "black" : "white" }} />
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
    <Box
      className={`fixed w-full z-50 py-[1em]  ${
        theme === "dark" ? "bg-dark-gray" : "bg-white"
      }`}
    >
      <AppBar position="" color="" elevation={0} className="">
        <Toolbar className="flex justify-between ">
          <div className="logo-wrapper flex align-items-center gap-2">
            <Link to={"/"}>
              <Typography
                variant="p"
                className="font-semibold tracking-[-1px] text-[1.5em]"
              >
                <span className={`${theme === "dark" ? "text-white" : ""}`}>
                  Spend
                </span>{" "}
                <span className="logo-span">Right</span>
              </Typography>
            </Link>
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
                className="cursor-pointer"
              >
                <Link
                  to={item.path}
                  className={`
      hover:text-indigo-400
      ${
        location.pathname === item.path
          ? "text-indigo-500 font-semibold"
          : theme === "dark"
          ? "text-light-gray"
          : "text-gray-700"
      }
    `}
                >
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Box>

          <div className="hidden md:flex items-center gap-[.5em]">
            <button className="login-btn text-white text-[1em] font-semibold py-[.4em] px-[1.7em] rounded-[7px] cursor-pointer">
              <a href="/login"> {t("login_btn")}</a>
            </button>
            {/* <HeaderMenu /> */}
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
