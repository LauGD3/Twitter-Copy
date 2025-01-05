import { useState } from "react";
import NavItem from "./NavItem";
import { Xlogo } from "../../assets/icons/Logos";
import { navStyles } from "./style";
import { Box, Button } from "@mui/material";
import MiniUser from "../user/MiniUser";

export default function NavBar() {
  const [selectedTitle, setSelectedTitle] = useState<string>("Home"); // Estado centralizado para la selección

  const navItems = [
    "Home",
    "Explore",
    "Notifications",
    "Messages",
    "Grok",
    "Bookmarks",
    "Jobs",
    "Communities",
    "VerifiedOrgs",
    "Profile",
    "More",
  ];

  return (
    <Box sx={navStyles.main}>
      <Box sx={navStyles.navBar}>
        <Box sx={navStyles.navItem}>
          <Xlogo size={26.25} fill="#fff" />
        </Box>
        {navItems.map((item) => (
          <NavItem
            key={item}
            title={item}
            isSelected={selectedTitle === item} // Determina si este es el seleccionado
            onSelect={setSelectedTitle} // Cambia el estado global
          />
        ))}
        <Button variant="contained" sx={navStyles.buttom}>
          Post
        </Button>
      </Box>
      <MiniUser />
    </Box>
  );
}
