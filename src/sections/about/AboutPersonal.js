import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import RevealContent from 'components/reveal-content'
import { StaticQuery, graphql } from 'gatsby'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import TabsPart from 'sections/about/parts/TabsPart'

class AboutPersonal extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            padding-top: 50px;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            @media (max-width: 767px) {
                padding: 80px 20px;
            }
            @media (max-width: 500px) {
                padding: 0 20px;
            }
        `

        const CounterRow = styled(Row)`
            margin-top: 100px;
            background-color: #000;
            padding: 100px 0;
            @media (max-width: 500px) {
                margin-top: 0;
            }

        `
        
        const AboutContainer = styled(Container)`
            padding: 100px 0;
            @media (max-width: 500px) {
                padding: 50px 0;
            }www.edvina.me
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            text-align: center;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #04e5e5;
                position: absolute;
                font-size: 39px;
                top: -28px;
                @media (max-width: 500px) {
                    top: 0;
                }
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: baseline;
            justify-content: center;
            @media (max-width: 500px) {
                margin-bottom: 50px;
            }
        `


        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `
        const ImageContainer = styled.div`
            border-radius: 20px;
            overflow: hidden;
            animation: ${AnimatedShadow} 10s infinite alternate;
            @media (max-width: 767px) {
                margin-bottom: 50px;
            }
        `

        const Image = styled.img`
            max-width: 400px;
            @media (max-width: 767px) {
                max-width: 200px;
            }
            @media (max-width: 1400px) {
                max-width: 280px;
            }
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 20px;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
            line-height: 50px;
        `

        const Text = styled.p`
            font-size: 18px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return(
            <Section id="about">
                <AboutContainer>
                    <Row>
                        <LeftCol md={12}>
                            <AnimationContainer animation="fadeIn">
                                
                            </AnimationContainer>
                        </LeftCol>
                        <Col md={12}>
                            <AnimationContainer animation="fadeIn">
                                <Heading>About Me</Heading>
                                <Separator />
                                <Text>
                                    <p>Currently I am a full-time computer science undergraduate at the University of Liverpool. I have always found it fascinating that we are able to create complexity from basic components. Whether it is product design, to devloping websites or graphic design, the process of going from concept to reality is always enjoyable and that is what led me to have a passion for technology.</p>


<p>I have recently decided to broaden and deepen my knowledge in cloud computing and cyber security further by utilising any resources available. These resources include signing up for AWS Educate, cloud guru and tryhackme. The objective is to become more proficient in cloud computing and cyber security, eventually linking the two together and use the knowledge gathered to solve problems and help people be more safe.</p>
                                </Text>
                                <TabsPart />
                            </AnimationContainer>
                        </Col>
                    </Row>
                </AboutContainer>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        image: file(relativePath: {eq: "about-me.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
      `}
      render={({ image }) => <AboutPersonal  image={image} {...props} />}
    />
  )
