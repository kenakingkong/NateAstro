import React from "react"
import Layout from "../components/layout"
import Acrostic from "../components/acrostic"
import Summary from "../components/summary"

const About = (props) => (
  <Layout path={props.location.pathname}>
    <Summary />
    <Acrostic />
  </Layout>
)

export default About;