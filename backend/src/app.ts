import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = "5000";

app.get("/", (_req, res) => {
  res.send({ message: "Welcome to NeoCart API 🚀" });
});

export default app;
