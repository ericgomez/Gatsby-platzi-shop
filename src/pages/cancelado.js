import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias () {
  return (
    <div>
      <SEO title='Compra Cancelada' />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Lamentamos que cancelaras la compra</p>
        <p>¡Te esparamos de vuelta, no pares de aprender!</p>
        <span role='img' aria-label='emoji'>
          ⚠
        </span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
