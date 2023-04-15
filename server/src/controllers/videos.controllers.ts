import { Request, Response } from "express";
import Video from "../models/Video";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find();

    return res.status(200).json(videos);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getVideo = async (req: Request, res: Response) => {
  try {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound)
      return res.status(404).json({ message: "Video Not found" });
    return res.status(200).json(videoFound);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createVideo = async (req: Request, res: Response) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(409).json({ message: "The URL already exists" });
    const video = new Video(req.body);
    const savedVideo = await video.save();

    return res.status(200).json(savedVideo);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const videoFound = await Video.findByIdAndRemove(req.params.id);
    if (!videoFound)
      return res.status(404).json({ message: "Video Not found" });

    return res.status(200).json(videoFound);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVideo)
      return res.status(404).json({ message: "Video Not found" });

    return res.status(200).json(updatedVideo);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
