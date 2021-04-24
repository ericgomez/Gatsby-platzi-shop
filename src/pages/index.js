import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"

// Consumo de Query en GraphQL
export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              wear
              img
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title='Home' />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
