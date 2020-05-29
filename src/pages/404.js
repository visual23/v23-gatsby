import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet bodyAttributes={{ class: '404' }} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage