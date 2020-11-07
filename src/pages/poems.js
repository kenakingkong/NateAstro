import React from "react"
import { Media } from "../media"
import Layout from "../components/layout"

const Poems = () => {
  return (
    <Layout>
      <Media at="xs">
        <h1>I'm a small poet</h1>
      </Media>
      <Media greaterThan="xs">
        <h1>I'm a large</h1>
      </Media>
    </Layout>
  )
}

export default Poems;