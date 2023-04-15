import { Router } from "express";
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from "../controllers/videos.controllers";

const router = Router();

router.get("/videos", getVideos);
router.get("/videos/:id", getVideo);
router.post("/videos", createVideo);
router.delete("/videos/:id", deleteVideo);
router.put("/videos/:id", updateVideo);

export default router;
