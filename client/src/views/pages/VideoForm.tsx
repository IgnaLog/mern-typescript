import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IVideo } from "../../models/Video";
import * as videoService from "../../api/VideoService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const initialStateVideo = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(initialStateVideo);

  const navigate = useNavigate();
  const params = useParams();

  const handleInputChange = (e: InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await videoService.createVideo(video);
      toast.success("New video added");
    } else {
      await videoService.updateVideo(params.id, video);
      toast.success("Video updated");
    }
    setVideo(initialStateVideo);
    navigate("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Write a title for this video"
                className="form-control mb-3"
                autoFocus
                onChange={handleInputChange}
                value={video.title}
              />

              <input
                type="text"
                name="url"
                placeholder="https://somsite.com"
                className="form-control mb-3"
                onChange={handleInputChange}
                value={video.url}
              />

              <textarea
                name="description"
                rows={3}
                className="form-control mb-3"
                placeholder="Write a description"
                onChange={handleInputChange}
                value={video.description}
              />

              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create Video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoForm;
