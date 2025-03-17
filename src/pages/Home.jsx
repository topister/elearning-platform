import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <Container className="text-center py-5">
        <h2 className="fw-bold">Why Choose Us?</h2>
        <Row className="mt-4">
          <FeatureCard
            icon={<FaBookOpen />}
            title="Quality Courses"
            description="Access a wide range of high-quality courses from industry experts."
          />
          <FeatureCard
            icon={<FaChalkboardTeacher />}
            title="Expert Instructors"
            description="Learn from professionals with real-world experience."
          />
          <FeatureCard
            icon={<FaGraduationCap />}
            title="Career Growth"
            description="Boost your skills and career with certified programs."
          />
        </Row>
      </Container>

      {/* Popular Courses */}
      <Container className="text-center py-5 bg-light">
        <h2 className="fw-bold">Popular Courses</h2>
        <Row className="mt-4">
          <CourseCard
            title="Web Development"
            description="Master HTML, CSS, JavaScript, and React."
          />
          <CourseCard
            title="Data Science"
            description="Learn Python, machine learning, and AI concepts."
          />
          <CourseCard
            title="Digital Marketing"
            description="SEO, social media, and growth strategies."
          />
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="text-center py-5">
        <h2 className="fw-bold">What Our Students Say</h2>
        <Row className="mt-4">
          <Testimonial
            name="John Doe"
            feedback="This platform has transformed my career! Amazing courses and support."
          />
          <Testimonial
            name="Jane Smith"
            feedback="The best online learning experience I’ve had! Highly recommended."
          />
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>
          © {new Date().getFullYear()} Topister Academy. All rights reserved.
        </p>
      </footer>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <Col md={4}>
    <motion.div
      className="p-4 bg-primary text-white rounded shadow-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="fs-1">{icon}</div>
      <h4 className="mt-3">{title}</h4>
      <p>{description}</p>
    </motion.div>
  </Col>
);

// ✅ Add PropTypes Validation
FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Course Card Component
const CourseCard = ({ title, description }) => (
  <Col md={4}>
    <motion.div
      className="p-4 bg-white rounded shadow-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>
);

// ✅ Add PropTypes Validation
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Testimonial Component
const Testimonial = ({ name, feedback }) => (
  <Col md={6}>
    <motion.div
      className="p-4 bg-light rounded shadow-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-muted">&quot;{feedback}&quot;</p>
      <h5 className="fw-bold">{name}</h5>
    </motion.div>
  </Col>
);

// ✅ Add PropTypes Validation
Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default Home;
