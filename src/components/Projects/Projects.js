import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import techstar from "../../Assets/Projects/techstar.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import chat from "../../Assets/Projects/real-time.png";
import auction from "../../Assets/Projects/home.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";
import foodvilla from "../../Assets/Projects/foodvilla.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auction}
              isBlog={false}
              title="Auction"
              description="Designed and developed a dynamic auction website using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Integrated
user authentication, real-time bidding, and payment processing for a seamless user experience. "
              ghLink="https://github.com/saurabh9323/auction-client"
              demoLink="https://auction-client-livid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodvilla}
              isBlog={false}
              title="FoodVilla"
              description="FoodVilla is a React-based project resembling Swiggy, leveraging Redux for state management, React Router for navigation, and Tailwind CSS for styling. It offers features akin to Swiggy, such as browsing menus, placing orders, and tracking deliveries. Implemented with modularity and scalability, it ensures a seamless user experience akin to popular food delivery platforms."
              ghLink="https://github.com/saurabh9323/auction-client"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-app"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Saurabh4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techstar}
              isBlog={false}
              title="responsive template website"
              description="TechStar is a React-based web app with Tailwind CSS, featuring a responsive design for seamless navigation. It showcases modern web development practices with dynamic components and fluid styling."
              ghLink="https://github.com/saurabh9323/techstar-frontend-"
              demoLink="https://techystar-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do-list"
              description="The project is a modern to-do list application built with React.js and styled using Tailwind CSS. It allows users to add, edit, and delete tasks dynamically. Features include drag-and-drop functionality for task rearrangement and responsive design for seamless use across devices."
              ghLink="https://github.com/saurabh9323/TO-DO-LIST-CLIENT"
              demoLink="https://to-do-list-client-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commmerce"
              description="Developed a real-time chat application website using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Integrated user
authentication, secure messaging, and real-time updates using Socket.io. Utilized MongoDB for efficient data management.
Designed a responsive UI with React.js for seamless cross-device chat experience."
              ghLink="https://github.com/saurabh592/ecommerce"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
