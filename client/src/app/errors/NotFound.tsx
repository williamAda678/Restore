import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Paper
      sx={{
        Height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 6,
      }}
    >
      <SearchOff sx={{ fontSize: 100 }} color="primary" />
      <Typography gutterBottom variant="h3">
        we could not found what you were looking for
      </Typography>
      <Button fullWidth component={Link} to="/catalog">
        go back to shop
      </Button>
    </Paper>
  );
}
