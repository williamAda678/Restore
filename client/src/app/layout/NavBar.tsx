import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function NavBar({ darkMode, toggleDarkMode }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <IconButton onClick={toggleDarkMode}>
          {darkMode ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
