import React from "react"
import Layout from "../components/layout"
import Stack from "../components/stack"

const Poems = (props) => (
  <Layout path={props.location.pathname}>
    <Stack />
  </Layout>
)
export default Poems;