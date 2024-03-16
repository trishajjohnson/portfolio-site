import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script';
import { Box, Grid, Button, Container } from "@mui/material";
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';


const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

const ButtonContainer = styled('div')({
    width: 25,
    marginTop: 10, color: 'white',
});

const ButtonStyled = styled(Button)({
    border: '.5px solid white',
    borderRadius: 3,
    color: 'white',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white'
    }
});

const InputBaseStyled = styled(InputBase)({
    marginTop: 10,
    borderRadius: 3,
    paddingLeft: 5
});

const StyledInput = styled(InputBaseStyled)({
    border: '.5px solid white',
    color: 'white',
    borderRadius: 3,
    paddingLeft: 5,
    lineHeight: 2,
    '&:focus': {
        border: '1px solid black'
    }
});

const FormStyled = styled('form')({
    width: '75%',
    margin: '0 auto',
});

const MessageContainer = styled('div')({
    textAlign: 'center',
    marginTop: 250
});

const Paragraph = styled('p')({
    fontSize: 20,
    marginTop: 10
});

const FormHeader = styled('h1')({
    fontSize: 50,
    marginBottom: 0
});

const FormHeaderContainer = styled('div')({
    margin: '40px 0 50px',
    textAlign: 'center'
});


function ContactForm2() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    console.log("publicKey", publicKey)
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("form", form.current);
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setIsSubmitted(true);
    };

    return (
        <Box>
            {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form> */}
            {isSubmitted ? (
                <MessageContainer>
                    <h1>Message Sent!</h1>
                    <Paragraph>Thanks for reaching out!  I'll get back to you as soon as possible.</Paragraph>
                </MessageContainer>
            ) : (
                <Box>
                    <FormHeaderContainer>
                        <FormHeader>Have a question?</FormHeader>
                        <Paragraph>Let's connect!</Paragraph>
                    </FormHeaderContainer>
                    <FormStyled ref={form} onSubmit={sendEmail}>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item>
                                <StyledInput  
                                    id="name-input"
                                    name="user_name"
                                    placeholder="Name"
                                    type="text"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <StyledInput  
                                    id="email-input"
                                    name="user_email"
                                    placeholder="Email"
                                    type="email"
                                    fullWidth 
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <StyledInput  
                                    id="message-input"
                                    name="message"
                                    placeholder="Message"
                                    type="text"
                                    variant="outlined"
                                    fullWidth 
                                    multiline
                                    rows={5}
                                    size="small"
                                />
                            </Grid>
                            <ButtonContainer>
                                <ButtonStyled variant="outlined" type="submit">
                                    Submit
                                </ButtonStyled>
                            </ButtonContainer>
                        </Grid>
                    </FormStyled>
                    <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
                </Box>
            )}
        </Box>
    );
};

export default ContactForm2;