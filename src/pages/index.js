import React from "react"
import Layout from "../components/layout"

const Home = (props) => (
  <Layout path={props.location.pathname}/>
)

export default Home;