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
import WalletIcon from "@mui/icons-material/Wallet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useAppContext();
  const { t } = useTranslation();

  console.log(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
          <div className="bg-[#733ce8] text-white rounded-md py-[.3em] text-center w-10 ">
            <WalletIcon />
          </div>

          <Typography variant="h6" className="font-semibold">
            {t("logo_title")}
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
      </List>
      <div className="flex items-center gap-4 mt-[2em]">
        <LanguageSwitcher />
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </Box>
  );

  return (
    <Box className="grow">
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className="mt-4"
      >
        <Toolbar className="flex justify-between pt-[1.2em] pb-[2em]">
          <div className="logo-wrapper flex align-items-center gap-2">
            <div className="bg-[#733ce8] text-white rounded-md py-[.3em] text-center w-10 ">
              <WalletIcon />
            </div>

            <Typography variant="h6" className="font-semibold">
              {t("logo_title")}
            </Typography>
          </div>

          <Box className="hidden md:flex space-x-6 gap-6">
            {navItems.map((item) => (
              <Typography
                key={item.name}
                variant="button"
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

          <div className="hidden md:flex md:items-center md:gap-2">
            <LanguageSwitcher />
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleThemeToggle}
                checked={theme === "dark"}
              />
              <span className="slider"></span>
            </label>
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
              <MenuIcon className="text-gray-800" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
