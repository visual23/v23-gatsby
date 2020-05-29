import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
//import PageTransition from 'gatsby-plugin-page-transitions';
import OutArrow from "../images/out-arrow.inline.svg";

const WorkDetailTemplate = ({ data }) => {
	//const acfData = data.wordpressWpWork.acf
	console.log("databug = "+JSON.stringify(data))
  
  return (
    <>
    <Layout bodyClasses={'project-detail'}>    
	    <SEO
	      title={data.wordpressWpWork.title}
	      description={data.wordpressWpWork.excerpt}
	    />
	    
	    <section className="work-detail-page">
	    	<div className="container">
		    	<div className="row project-info">
			    	<div className="col-md-3">
			    		<div className="project-info-block">
				    		<h3 dangerouslySetInnerHTML={{ __html: data.wordpressWpWork.title }} />
				    		<a className="project-link-btn" href={data.wordpressWpWork.acf.project_link} target="_blank" rel="noopener noreferrer">
		                        View Project <OutArrow/>
		                    </a>
			    		</div>
		    		</div>
		    		<div className="col-md-2">
		    			<div className="project-info-block">
				    		<h3>Client</h3>
				    		<span dangerouslySetInnerHTML={{ __html: data.wordpressWpWork.acf.client_name }} />
			    		</div>
		    		</div>
		    		{data.wordpressWpWork.acf.agency_name > 0 &&
				        <div className="col-md-2">
			    			<div className="project-info-block">
					    		<h3>Agency</h3>
					    		<span dangerouslySetInnerHTML={{ __html: data.wordpressWpWork.acf.agency_name }} />
				    		</div>
			    		</div>
				    }		    		
		    		<div className="col-md-2">
		    			<div className="project-info-block">
				    		<h3>Services Rendered</h3>
				    		<span dangerouslySetInnerHTML={{ __html: data.wordpressWpWork.acf.what_i_did }} />
			    		</div>	
		    		</div>
		    	</div>
	    	</div>

	    	<div className="project-images">
	    		<div className="container">
	    		{data.wordpressWpWork.acf.large_images.map(images => (
                    <Img
                      key={images.image.localFile.childImageSharp.fluid.src}
			          fluid={images.image.localFile.childImageSharp.fluid}
			          alt={images.image_info}
			          className={images.image_style[0]}
			        />
                  ))}	
                </div>    		
	    	</div>
	    </section>
	    
	  </Layout>
  </>
  )
}
export default WorkDetailTemplate

export const query = graphql`
  query($id: Int!) {
  	wordpressWpWork( wordpress_id: {eq: $id}) {

  		title
	    slug
	    acf{
	      what_i_did
	      client_name
	      agency_name
	      project_link 
	      hover_image {
	      	id
	        localFile {
	          childImageSharp {
	            fluid{
	              base64
	              srcSet
	            }
	          }
	        }
	      }
	      large_images {
	        image_info
	        image_style
	        image {
		      	id
		        localFile {
		          childImageSharp {
		            fluid(maxWidth: 2600) {
			          ...GatsbyImageSharpFluid
			        }
		          }
		        }
		      }
	      }
	      is_active
	    }

	    title
	    slug
	    acf {
	      hover_image {
	      	id
	        localFile {
	          childImageSharp {
	            fluid{
	              base64
	              srcSet
	            }
	          }
	        }
	      }
	    }
	  }
  }
`