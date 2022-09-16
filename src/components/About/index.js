import React from "react";
// Import picture froma assets
import coverImage from "../../assets/cover/Profile.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Professional Developer, Lifelong Learner</h1>
      <div className="d-flex justify-content-center">
        <div>
          <img
            src={coverImage}
            className="my-2"
            style={{ width: "20%" }}
            alt="cover"
          />
        </div>
        <div>
          <p>
            Hello! My name is Susan Pero and I am from Orlando, Florida. I grew
            up in a musical household and originally went to school to study
            music education. I taught elementary music, but chose to change
            paths and follow my passion for plants. Once I completed my degrees
            in Plant Science I began to work as head grower for a local cactus
            nursery. I loved what I did, but knew that such a physical career
            would not be sustainable. While working in those fields I dabbled in
            coding and even did some free bootcamps, so I chose to look into
            making it my career. I am currently attending UCF's Coding Bootcamp
            with hopes of a job upon completion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
