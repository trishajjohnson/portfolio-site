import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script';
import { Box, Grid, Button, InputBase } from "@mui/material";

import styles from "./ContactForm.module.css";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;


export default function ContactForm() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setIsSubmitted(true);
    };

    return (
        <Box id="contact" className={`section ${styles.contactForm}`}>
            
            {isSubmitted ? (
                <Box className={styles.message}>
                    <h1>Message Sent!</h1>
                    <p className={styles.paragraph}>Thanks for reaching out!  I&apos;ll get back to you as soon as possible.</p>
                </Box>
            ) : (
                <Box>
                    <Box className={styles.formHeaderContainer}>
                        <h1 className={styles.formHeader}>Have a question?</h1>
                        <p className={styles.paragraph}>Let&apos;s connect!</p>
                    </Box>
                    <form className={styles.form} ref={form} onSubmit={sendEmail}>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item>
                                <InputBase
                                    className={styles.formInput}  
                                    id="name-input"
                                    name="user_name"
                                    placeholder="Name"
                                    type="text"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <InputBase
                                    className={styles.formInput}  
                                    id="email-input"
                                    name="user_email"
                                    placeholder="Email"
                                    type="email"
                                    fullWidth 
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <InputBase
                                    className={styles.formInput}  
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
                            <Box className={styles.buttonContainer}>
                                <Button className={styles.button} variant="outlined" type="submit">
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                    <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
                </Box>
            )}
        </Box>
    );
}
