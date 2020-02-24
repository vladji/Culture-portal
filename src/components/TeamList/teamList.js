import React from "react"
import { FaGithubSquare } from "react-icons/fa"

const TeamList = ({ team }) => {
  return (
    <ul className="cards">
      {team.map(teammate => {
        return (
          <li className="card" id={teammate.node.id}>
            <div
              className="developer-image"
              src={teammate.node.frontmatter.photo}
              alt="developer"
              style={{
                backgroundImage: `url(${teammate.node.frontmatter.photo})`,
              }}
            ></div>
            <h5 style={{ marginTop: "1rem" }}>
              {teammate.node.frontmatter.name}
            </h5>
            <a
              href={teammate.node.frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="github" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default TeamList
