import { Card, Button, Container, Row, Col } from "react-bootstrap";

const courses = [
  { title: "React Basics", description: "Learn the fundamentals of React." },
  { title: "JavaScript Mastery", description: "Deep dive into JavaScript." },
];

function Courses() {
  return (
    <Container>
      <h2 className="mb-4">Courses</h2>
      <Row>
        {courses.map((course, index) => (
          <Col key={index} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="success">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
