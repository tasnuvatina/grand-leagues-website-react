import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FakeGallery from "../../FakeData/FakeGallery";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <Container>
        <Row>
          {FakeGallery.map((imageDetail) => (
            <Col xs={12} md={6} lg={4}>
              <Image src={imageDetail.image} key={imageDetail.id}className="image-style" rounded />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
