import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero/hero.jpg"; // Update with your image path

const HeroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Side: Image with Animation */}
        <div className="col-md-6 d-flex justify-content-center">
          <motion.img
            src={heroImage}
            alt="Hero"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold">Welcome to Topister Academy</h1>
          <p className="text-muted">
            Learn new skills, boost your career, and explore endless
            possibilities with our expert-led courses.
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
