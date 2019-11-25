import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Form from "../components/form"
import Feedback from "../components/feedback"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Form />
    <Feedback />
  </Layout>
)

export default IndexPage
