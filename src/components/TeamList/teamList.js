import React from "react"
import { FaGithubSquare } from "react-icons/fa"

const TeamList = ({ team }) => {
  return (
    <ul className="cards">
      {team.map(teammate => {
        console.log(teammate.node.id)
        return (
          <li
            className="card bg-light mb-3"
            style={{ paddingBottom: "0" }}
            id={teammate.node.id}
          >
            <div
              className="developer-image"
              src={teammate.node.frontmatter.photo}
              alt="developer"
              style={{
                backgroundImage: `url(${teammate.node.frontmatter.photo})`,
              }}
            ></div>
            <div style={{ width: "100%" }}>
              <h5 className="card-header">{teammate.node.frontmatter.name}</h5>
              <div className="card-body">
                <h6>{teammate.node.frontmatter.role}</h6>
                <a
                  href={teammate.node.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="github" />
                </a>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TeamList
