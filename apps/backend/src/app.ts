import express, { type Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;
