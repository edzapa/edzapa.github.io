import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import TestimonialsThreePart from './parts/TestimonialsThreePart.js'
import AnimatedHeading from 'components/animated-heading'

class TestimonialsThree extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            background-size: cover;
        `

        const TestimonialContainer = styled.div`
            padding: 100px 0;
            @media (max-width: 767px) {
                padding: 50px 10px;
            }
        `




        return(
            <Section id="testimonials">
                <TestimonialContainer>
                    <Container>
                      <AnimatedHeading text="Recent testimonials" />
                      <AnimationContainer animation="fadeIn">
                        <TestimonialsThreePart testimonials={this.props.testimonials} />
                      </AnimationContainer>
                    </Container>
                </TestimonialContainer>
            </Section>
        )
    }

 

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
          testimonials: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(testimonials)/"}}, sort: {fields: [frontmatter___id], order: ASC}) {
            edges {
              content: node {
                frontmatter {
                  id
                  name
                  profession
                  text
                }
              }
            }
          }
      }      
      `}
      render={({ testimonials }) => <TestimonialsThree testimonials={testimonials.edges} {...props} />}
    />
  )