import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AppImage = ({ src = '/assets/no-photo.jpg', alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid{
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)
  const { allImageSharp } = data
  const { nodes } = allImageSharp
  const srcArrSplit = src.split("/")
  const srcArrLength = srcArrSplit.length
  const fileName = srcArrLength === 1 ? src : srcArrSplit[srcArrLength - 1];
  let source = nodes.find(el => el.fluid.originalName.includes(fileName));
  if (!source) {
    source = nodes.find(el => el.fluid.originalName === 'no-photo.jpg');
  }
  const altSource = source.fluid.originalName;
  return <Img fluid={source.fluid}  alt={alt || altSource} imgStyle={{objectFit: 'contain'}}/>
}

export default AppImage
