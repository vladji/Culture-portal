import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import "./DayAuthor.css"

const getDate = () => {
  let date = new Date();
  return Number(date.toLocaleString('en-US', { day: 'numeric' }));
}

const DayAuthor = ({ content }) => {
  const data = useStaticQuery(graphql`
  {
    allImageSharp {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }
`);

  const autorsList = content;
  const date = getDate();
  const currentAuthor = date % (autorsList.length - 1);
  const authorData = autorsList[currentAuthor].frontmatter;
  const currentPhoto = authorData.imageName;

  const photo = data.allImageSharp.nodes.find((node) => node.fluid.originalName === currentPhoto);

  return (
    <section className="day-author">
      <div className="content-wrapper">
        <h2>Author of the day</h2>
        <div className="block-responsive">
          <div className="day-author__photo">
            <Img
              fluid={photo.fluid}
              alt="Author of the day photo"
            />
          </div>
          <div className="day-author__description">
            <h3>{authorData.title}</h3>
            <ul>
              <li>{authorData.city}</li>
              <li>{authorData.titleText}</li>
              <li>{authorData.directorsLifeYears}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DayAuthor;