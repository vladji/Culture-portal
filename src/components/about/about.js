import React from "react"
import "./about.css"

const About = ({ content }) => {
  return (
    <section className="about">
      <div className="content-wrapper">
        <h2>Portal's description</h2>
        <p>{content}</p>
      </div>
    </section>
  )
}

export default About