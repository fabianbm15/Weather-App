import express from "express";
import cityRouter from "./routes/cities";

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

app.use("/api/", cityRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
