import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function image () {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)

        return <Img fluid={data.icon.childImageSharp.fluid} />
      }}
    />
  )
}
