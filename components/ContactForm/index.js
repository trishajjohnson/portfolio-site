import React, { useState } from 'react';
import emailjs from 'emailjs';
import Script from 'next/script';
import { Grid, Button, Container } from "@mui/material";
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ButtonContainer = styled('div')({
    width: 25,
    marginTop: 10, color: 'white',
});

const ButtonStyled = styled(Button)({
    border: '.5px solid black',
    borderRadius: 3,
    color: 'black',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        border: 'none'
    }
});

const InputBaseStyled = styled(InputBase)({
    marginTop: 10,
    borderRadius: 3,
    paddingLeft: 5
});

const StyledInput = styled(InputBaseStyled)({
    border: '.5px solid black',
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


function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log("submitted!");
        // call the email API to send message info
        try {
            const response = await axios.post(`${BASE_URL}/api/sendMail`, formData);
            console.log("response", response);
            setFormData({
                name: formData.name,
                email: "",
                message: "",
            });
            setIsSubmitted(true);
        } catch(error) {
            console.log("error", error);
        }
    }


    return (
        <Container>
            {isSubmitted ? (
                <MessageContainer>
                    <h1>Message Sent!</h1>
                    <Paragraph>Thanks for reaching out, {formData.name}!  We&apos;ll get back to you as soon as possible.</Paragraph>
                </MessageContainer>
            ) : (
                <div>
                    <FormHeaderContainer>
                        <FormHeader>Have a question?</FormHeader>
                        <Paragraph>Let&apos;s connect!</Paragraph>
                    </FormHeaderContainer>
                    <FormStyled onSubmit={handleSubmit}>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item>
                                <StyledInput  
                                    id="name-input"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={formData.name}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <StyledInput  
                                    id="email-input"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email} 
                                    fullWidth 
                                    size="small"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <StyledInput  
                                    id="message-input"
                                    name="message"
                                    placeholder="Message"
                                    type="text"
                                    variant="outlined"
                                    value={formData.message}
                                    fullWidth 
                                    multiline
                                    rows={5}
                                    size="small"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <ButtonContainer>
                                <ButtonStyled variant="outlined" type="submit">
                                    Submit
                                </ButtonStyled>
                            </ButtonContainer>
                        </Grid>
                    </FormStyled>
                </div>
            )}
            <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
        </Container>
    );
}


export default ContactForm;