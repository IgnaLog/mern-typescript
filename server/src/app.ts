import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import videosRoutes from "./routes/videos.routes";

const app = express();

// Settings
app.set("port", config.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use(videosRoutes);

export default app;
