import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutBackground from "../components/AboutBackgroundImage"
import { Helmet } from 'react-helmet'

import IconLinkedIn from "../images/icon-linked-in.inline.svg";
import IconInstagram from "../images/icon-instagram.inline.svg";
import IconFacebook from "../images/icon-facebook.inline.svg";
import IconEmail from "../images/icon-email.inline.svg";

const AboutPage = ({ data }) => {
  const acfData = data.allWordpressPage.edges[0].node.acf
  //console.log("databug = "+JSON.stringify(data))
  console.log('At about page');

  ///document.body.classList.add('about-page');

  return (
    <>
      <Layout bodyClasses={'about'}>
      <SEO title="About" />
      <Helmet bodyAttributes={{ class: 'about' }} />
      
      <div className="about-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-6">
              <div className="about-right">              
                <div className="about-right-content"> 
                  <div className="about-header">
                    <h2 className="section-title">About Robb Bennett</h2>
                  </div>                                   
                  <h1>Developer <span>/</span> Designer <span>/</span> Father <span>/</span> Friend <span>/</span> Bonsai Artist </h1>
                  <p>Tucked away in the mountains of Western North Carolina lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac felis. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Mollis nunc sed id semper risus in hendrerit. Leo in vitae turpis massa sed elementum tempus egestas. Dictum sit amet justo donec enim diam. Lacus luctus accumsan tortor posuere ac ut. Sagittis purus sit amet volutpat consequat. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Erat velit scelerisque in dictum non consectetur.</p>

                  <ul className="social-links">
                    <li>
                      <a className="icon-instagram" href="https://instagram.com/iheartbonsai">
                        <IconInstagram/>
                      </a>
                    </li>
                    <li>
                      <a className="icon-facebook" href="#">
                        <IconFacebook/>
                      </a>
                    </li>
                    <li>
                      <a className="icon-linked-in" href="#">
                        <IconLinkedIn/>
                      </a>
                    </li>
                    <li>
                      <a className="icon-email" href="mailto:robb@visual23.com">
                        <IconEmail/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-left">
                <AboutBackground/>
              </div>
            </div>
          </div>
        </div>        
      </div>
      
    </Layout>
    </>
  )
}

export const query = graphql`
  query{
    allWordpressPage(filter: {wordpress_id: {eq: 4}}) {
      edges {
        node {
          acf {
            welcome_intro
            expertise_block_1 {
              call_out_title
              content
              title
            }
            expertise_block_2 {
              call_out_title
              content
              title
            }
            expertise_block_3 {
              call_out_title
              content
              title
            }
          }
        }
      }
    }
}
`

export default AboutPage