import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from "../components"

import { SEO } from "../components"
import styled from "styled-components"

// Consumo de Query en GraphQL
export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.2);
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title='Home' />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color='gray'>Comprar</Button>
    <Link to='/page-2/'>Go to page 2</Link>
    <Link to='/gracias/'>Go to gracias</Link>
  </>
)

export default IndexPage
