import { Container } from "react-bootstrap";
import { getVidelUrl } from "../../../utils";

interface MovieDetailProps {
  movie: {
    id: string | undefined;
    video: string | null;
  };
}

const Video: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <Container>
      <div className="ratio ratio-16x9">
        <iframe
          src={getVidelUrl(movie.video)}
          title="Video"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Video;

