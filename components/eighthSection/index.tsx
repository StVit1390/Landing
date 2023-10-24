// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'

// MUI
import { TextField, Typography, Button } from "@mui/material";


export const EighthSection:FC = () => {
    const [formValues, setFormValues] = useState({name: '', phone: '', email: '', message: ''})

    const postData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        message: 'This is a test message.',
    };

    // Make the POST request
    axios
        .post('http://localhost:1337/api/suports', postData)
        .then(response => {
            console.log('Support request created:', response.data);
        })
        .catch(error => {
            console.error('Error creating support request:', error);
        });
 
    
    return (
        <S.SectionWrap>
            <Typography variant="h2">Support</Typography>
            <S.FormWrap>
                <Typography variant="h3">Do you have any question?</Typography>
                <S.FormContent>
                    <S.Label>
                        <Typography variant="body2">Your name:</Typography>
                        <S.Shadow>
                            <TextField
                                sx={{height:'75px'}}
                                id="outlined-basic"
                                value={formValues.name}
                                onChange={(e)=>setFormValues({...formValues, name: e.target.value})}
                                fullWidth
                                placeholder="Name*"
                                rows='3'
                                variant="outlined" />
                        </S.Shadow>  
                    </S.Label>
                    <S.Label>
                        <Typography variant="body2">Your phone:</Typography>
                        <S.Shadow>
                            <TextField
                                sx={{ height: '75px' }}
                                id="outlined-basic"
                                value={formValues.phone}
                                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                                fullWidth
                                placeholder="Phone*" 
                                variant="outlined" />
                        </S.Shadow>
                    </S.Label>
                    <S.Label>
                        <Typography variant="body2">Your email:</Typography>
                        <S.Shadow>
                            <TextField
                                sx={{ height: '75px' }}
                                id="outlined-basic"
                                value={formValues.email}
                                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                                fullWidth
                                placeholder="Email*" 
                                variant="outlined" />
                        </S.Shadow>
                    </S.Label>
                    <S.Label>
                        <Typography variant="body2">Your message:</Typography>
                        <S.Shadow>
                            <TextField
                                value={formValues.message}
                                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                                multiline
                                fullWidth
                                id="outlined-basic"
                                placeholder="Knowledge backed by experience"
                                variant="outlined"
                                minRows={6}/>
                        </S.Shadow>
                    </S.Label>
                </S.FormContent>
                <Button variant="contained">Send</Button>
            </S.FormWrap>
        </S.SectionWrap>
    )
}