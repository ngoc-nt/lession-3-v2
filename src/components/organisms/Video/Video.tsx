import React from "react";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://player.vimeo.com/video/137857207"
          title="Vimeo video"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}
