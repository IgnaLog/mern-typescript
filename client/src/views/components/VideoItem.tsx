import { IVideo } from "../../models/Video";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import * as videoService from "../../api/VideoService";

interface Props {
  video: IVideo;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1
            onClick={() => {
              navigate(`/update/${video._id}`);
            }}
          >
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => {
              video._id && handleDelete(video._id);
            }}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="ratio ratio-16x9">
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
