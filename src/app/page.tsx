import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box>
        <Typography variant="h1">Home Page H1</Typography>
        Testing material-ui box and typography
      </Box>
    </main>
  );
}
