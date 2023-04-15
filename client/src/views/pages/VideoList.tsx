import { useEffect, useState } from "react";
import { IVideo } from "../../models/Video";
import * as videoService from "../../api/VideoService";
import VideoItem from "../components/VideoItem";

const VideoList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const loadVideos = async () => {
    const res = await videoService.loadVideos();
    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    console.log(formatedVideos);
    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => (
        <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
      ))}
    </div>
  );
};
export default VideoList;
