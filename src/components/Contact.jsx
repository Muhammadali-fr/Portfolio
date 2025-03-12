import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import toast from 'react-hot-toast';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = '7166400728:AAENydLWNB8DEtbhVjT9X3QJj3NOxtNnNM4';
        const chatId = '5724981036';

        const telegramMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}
            Message: ${formData.message}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                }),
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Error sending message.');
        }
    };

    return (
        <div id="contact" className="flex flex-col gap-5 max-w-[90%] mx-auto">
            <p className="text-center text-2xl font-bold">Contact me</p>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 4,
                    maxWidth: 600,
                    margin: "0 auto",
                    borderRadius: 2,
                }}
                className="bg-white rounded-md"
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#ebebeb]"
                    />
                    <TextField
                        required
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#ebebeb]"
                    />
                    <TextField
                        required
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-[#ebebeb]"
                    />
                    <TextField
                        required
                        label="Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#ebebeb]"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className=" bg-[#ebebeb] w-full"
                    >
                        Send Message
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default ContactPage;
