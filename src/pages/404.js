import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby";

import LeftArrow from "../images/left-arrow.inline.svg";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet bodyAttributes={{ class: 'page-not-found' }} />
    <section className="error-page">
	    <div className="container">
	    	<Link className="back-btn" to="/"><LeftArrow/> Go Back</Link>
	    	<h1>404</h1>
    		<h2>Nothing to see here.</h2>
	    </div>
    </section>    
  </Layout>
)

export default NotFoundPage
