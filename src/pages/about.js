import React from "react"
import Layout from "../components/layout"
import FluidGrid from "../components/fluidgrid"
import Social from "../components/social"
import Acrostic from "../components/acrostic"
import Summary from "../components/summary"

export default function About() {
  return (
    <Layout>
      <FluidGrid
        one={<Summary />}
        two={<Social />}
        three={<Acrostic />}
      />
    </Layout>
  )
}
