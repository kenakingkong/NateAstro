import React from "react"
import Layout from "../components/layout"

const NotFound = (props) => (
  <Layout path={props.location.pathname}>
    <h1>I'm not sure what page you were looking for and why you were looking for it ... because it doesn't seem to exist???/???</h1>
  </Layout>
)
export default NotFound