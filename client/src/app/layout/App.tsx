import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? "dark" : "light";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  useEffect(() => {
    fetch("https://localhost:5001/api/products").then((Response) =>
      Response.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Box
          sx={{
            minHeight: "100vh",
            background: darkMode
              ? "radial-gradient(circle, #1e3aBa, #111B27)"
              : "radial-gradient(circle, #baecf9, #f0f9ff)",

            py: 6,
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 8 }}>
            <Catalog products={products} />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
