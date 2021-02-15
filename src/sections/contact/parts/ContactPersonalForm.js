import React from 'react'
import styled, { keyframes } from 'styled-components'


const axios = require('axios')
class ContactThreeForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            error: false,
            response: ""
        }
    }

    formSubmit() {
      if (this.state.name === "" || this.state.email === "" || this.state.subject === "" || this.state.message === "") {
          this.setState({error: true})
      } else {
          this.setState({error: false})
          var bodyFormData = new FormData()
          bodyFormData.append('full_name', this.state.name)
          bodyFormData.append('email', this.state.email)
          bodyFormData.append('subject', this.state.subject)
          bodyFormData.append('message', this.state.message)
          axios({
            method: 'post',
            url: 'https://formspree.io/f/xjvpdyaq', 
            data: bodyFormData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then((response) => {
                if (response.data.ok) {
                  this.setState({response: "Your message has been submitted!"})
                } else {
                  this.setState({response: "Your message could not be submitted"})
                }
                this.forceUpdate()
            })
            .catch(function (response) {
                this.setState({response: "There was an error"})
                this.forceUpdate()
            });
      }
      this.forceUpdate()
    }

    
    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      return false;
    }

    render() {

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            margin-left: 6px;
        `

        const ContactForm = styled.div`
            padding: 40px;
            width: 100%;
            position: relative;
            z-index: 5;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
        `

        const InputElement = styled.div`
            margin: 20px 0;
        `

        const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `
        

        const Input = styled.input`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `

        const Textarea = styled.textarea`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: rgb(255, 255, 255);
            transition: all 0.5s ease 0s;
            min-height: 100px;
            margin-top: 0px;
            margin-bottom: 0px;
            height: 100px;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
        `

        const Submit = styled.button`
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            background-color: #000;
            &:hover {
              background: #444;
            }
            span {
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
        `

        const Response = styled.p`
            color: #fff;
            margin-top: 10px;
        `
        return(
          <ContactForm >
              <Heading>
                Get In Touch
              </Heading>
              <Separator />
              <InputElement>
                <Input type="text" defaultValue={this.state.name}  className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
              </InputElement>
              <InputElement>
                <Input type="text" name="_replyto" defaultValue={this.state.email} className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
              </InputElement>
              <InputElement>
                <Input type="text" defaultValue={this.state.subject} className={`name ${this.check(this.state.subject) ? "" : "error"}`} placeholder="Subject" onChange={e => this.setState({subject: e.target.value})} />
              </InputElement>
              <InputElement>
                <Textarea placeholder="Message" defaultValue={this.state.message}  className={`message ${this.check(this.state.message) ? "" : "error"}`} onChange={e => this.setState({message: e.target.value})} />
              </InputElement>
              <Submit onClick={() => this.formSubmit()}>
                <span>
                  Submit
                </span>
              </Submit>
              <Response>{this.state.response}</Response>
          </ContactForm>
        )
    }

}

export default ContactThreeForm
