import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import SlickSlider from "../components/slickSlider"
import * as Scroll from 'react-scroll';
import { graphql, Link } from "gatsby";
import { Helmet } from 'react-helmet'
//import AnimatedBackground from '../components/animatedBackground' <AnimatedBackground />
import GooeyImages from '../components/gooeyImages'

import AOS from 'aos';
import 'aos/dist/aos.css';

import VisualThinkingIcon from "../images/icon-visual-thinking.inline.svg";
import DesignDevIcon from "../images/icon-design-dev.inline.svg";
import BuiltIcon from "../images/icon-built.inline.svg";
import DownArrow from "../images/down-arrow.inline.svg"; 

let ScrollLink = Scroll.Link;

class App extends React.Component {

  constructor(props) {
    console.log('At constructor');
    super(props);
    this.pageData = this.props.data.allWordpressPage.edges[0].node.acf
    this.workData = this.props.data.allWordpressWpWork.edges  
         
  }

  componentDidMount() {
    console.log('Mount Up!')

    AOS.init()
  }

  render() {

    console.log('render home');
    
    return (
      <Layout bodyClasses={'index'}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
            
      <Helmet>
        <body data-home="true" />
      </Helmet>
      <Helmet>
        <body data-about="false" />
      </Helmet>
            
      <ul className="section-menu">
        <li>
          <ScrollLink 
            className="dot"
            activeClass= "active"
            to="welcome"
            spy={true}
            smooth={true}
            offset= {-160}
            duration= {500}           
          >
            <span className="sr-only">Welcome</span>
            <span></span>            
          </ScrollLink>
          <div className="cool-ass-tooltip cool-ass-right"><span>Welcome</span></div>
        </li>
        <li>
          <ScrollLink 
            className="dot"
            activeClass= "active"
            to="expertise"
            spy={true}
            smooth={true}
            offset= {-160}
            duration= {500}           
          >
            <span className="sr-only">Expertise</span>
            <span></span>            
          </ScrollLink>
          <div className="cool-ass-tooltip cool-ass-right"><span>Expertise</span></div>
        </li>
        <li>
          <ScrollLink 
            className="dot"
            activeClass= "active"
            to="projects"
            spy={true}
            smooth={true}
            offset= {-160}
            duration= {500}           
          >
            <span className="sr-only">Selected Projects</span>
            <span></span>            
          </ScrollLink>
          <div className="cool-ass-tooltip cool-ass-right"><span>Selected Projects</span></div>
        </li>
        <li>
          <ScrollLink 
            className="dot"
            activeClass= "active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset= {-160}
            duration= {500}           
          >
            <span className="sr-only">What Clients Say</span>
            <span></span>            
          </ScrollLink>
          <div className="cool-ass-tooltip cool-ass-right"><span>What Clients Say</span></div>
        </li>
        <li>
          <ScrollLink 
            className="dot"
            activeClass= "active"
            to="contact"
            spy={true}
            smooth={true}
            offset= {-160}
            duration= {500}           
          >
            <span className="sr-only">Contact</span>
            <span></span>            
          </ScrollLink>
          <div className="cool-ass-tooltip cool-ass-right"><span>Contact</span></div>
        </li>
      </ul>
      <div className="home-page">        
          <section id="welcome" className="section section-content section-welcome">
            <Container>
            <h2 className="section-title"
              data-aos="fade-in" 
              data-aos-duration="700" 
              data-aos-delay="0"
            >Welcome</h2>
            <div data-aos="fade-up" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: this.pageData.welcome_intro }} />
            <ScrollLink 
              className="down-btn"
              to="expertise"
              spy={true}
              smooth={true}
              offset= {-160}
              duration= {500}           
            >
              <DownArrow/>            
            </ScrollLink>
            </Container>
            
          </section>

          <section id="expertise" className="section section-content section-expertise">
            <Container>
              <h2 className="section-title"
                data-aos="fade-in" 
                data-aos-duration="700" 
                data-aos-delay="0"
              >
                  Expertise</h2>
              <Row className="expertise-row">
                <div className="col-md-4"
                  data-aos="fade-up" 
                  data-aos-duration="700" 
                  data-aos-delay="0"                  
                >
                  <div className="expertise-wrapper">
                    <div className="expertise-icon">
                      <VisualThinkingIcon />
                    </div>
                    <h2 className="section-title">{this.pageData.expertise_block_1.title}</h2>
                    <h1>{this.pageData.expertise_block_1.call_out_title}</h1>                        
                    <div dangerouslySetInnerHTML={{ __html: this.pageData.expertise_block_1.content }} />
                  </div>
                </div>
                <div className="col-md-4" 
                  data-aos="fade-up" 
                  data-aos-duration="700" 
                  data-aos-delay="300"
                >
                  <div className="expertise-wrapper">
                    <div className="expertise-icon">
                      <DesignDevIcon />
                    </div>
                    <h2 className="section-title">{this.pageData.expertise_block_2.title}</h2>
                    <h1>{this.pageData.expertise_block_2.call_out_title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: this.pageData.expertise_block_2.content }} />
                  </div>
                </div>
                <div className="col-md-4"
                  data-aos="fade-up" 
                  data-aos-duration="700" 
                  data-aos-delay="600"
                >
                  <div className="expertise-wrapper">
                    <div className="expertise-icon">
                      <BuiltIcon />
                    </div>
                    <h2 className="section-title">{this.pageData.expertise_block_3.title}</h2>
                    <h1>{this.pageData.expertise_block_3.call_out_title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: this.pageData.expertise_block_3.content }} />
                  </div>
                </div>
              </Row>                  
            </Container>
          </section>

          <section id="projects" className="section section-content section-projects">
            <Container>
            <h2 className="section-title"
              data-aos="fade-in" 
              data-aos-duration="700" 
              data-aos-delay="0"
            >Selected projects</h2>
            <ul className="project-list">
              {this.workData.map((work, i) => (
                <li key={i}>
                  <Link
                    className="link"                  
                    to={`/projects/${work.node.slug}`}
                  >
                    <h3
                        dangerouslySetInnerHTML={{ __html: work.node.title }}
                      />
                      <img
                        alt={work.node.title}
                        src={work.node.acf.hover_image.localFile.childImageSharp.original.src}
                      />                  
                    
                  </Link>
                </li>
              ))}
            </ul>
            </Container>
            <GooeyImages />
          
          </section>

          <section id="testimonials" className="section section-content section-testimonials">
            <Container>
            <h2 className="section-title"
              data-aos="fade-in" 
              data-aos-duration="700" 
              data-aos-delay="0"
            >What Clients Say</h2>
            <SlickSlider
              key={2} 
              data={this.pageData}
            />
            </Container>
          </section>

          <section id="contact" className="section section-content section-contact">
            <Container>
            <h2 className="section-title"
              data-aos="fade-in" 
              data-aos-duration="700" 
              data-aos-delay="0"
            >Contact</h2>
            <div className="contact-wrapper">
              <a href="mailto:hello@visual23.com">hello@visual23.com</a>
              <div className="break" />
              <a href="tel:8282256670">828.225.6670</a>
            </div>
            </Container>
          </section>          
        </div>
      </Layout>
    );
  }
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
          testimonials{
            comment
            from
          }
        }
      }
    }
  }
  allWordpressWpWork(limit: 10){
    edges{
      node{
        title
        slug
        acf {
          hover_image {
            id
            localFile {
              absolutePath
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default App;
