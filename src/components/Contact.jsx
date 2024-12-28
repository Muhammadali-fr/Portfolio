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
        <div id="contact" className="p-5">
            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-300 dark:border-gray-600 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">Contact me</span>
                <div className="border-t border-gray-300 dark:border-gray-600 flex-grow"></div>
            </div>
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
                className="bg-gray-100 dark:bg-gray-800 dark:shadow-lg shadow-md p-4 rounded-md"
            >
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                        InputProps={{
                            style: { color: "black" }, // Default text color
                            className:
                                "placeholder-gray-500 dark:placeholder-gray-300 text-black dark:text-white border-black dark:border-white",
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300 text-gray-700",
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "black", // Default border for light mode
                                },
                                "&:hover fieldset": {
                                    borderColor: "black", // Hover border for light mode
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "black", // Focused border for light mode
                                },
                                "&.dark": {
                                    "& fieldset": {
                                        borderColor: "white", // Default border for dark mode
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "white", // Hover border for dark mode
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white", // Focused border for dark mode
                                    },
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                            style: { color: "black" },
                            className:
                                "placeholder-gray-500 dark:placeholder-gray-300 text-black dark:text-white border-black dark:border-white",
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300 text-gray-700",
                        }}
                    />
                    <TextField
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.subject}
                        onChange={handleChange}
                        InputProps={{
                            style: { color: "black" },
                            className:
                                "placeholder-gray-500 dark:placeholder-gray-300 text-black dark:text-white border-black dark:border-white",
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300 text-gray-700",
                        }}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        InputProps={{
                            style: { color: "black" },
                            className:
                                "placeholder-gray-500 dark:placeholder-gray-300 text-black dark:text-white border-black dark:border-white",
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300 text-gray-700",
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className="dark:bg-gray-700 bg-gray-800 text-white hover:dark:bg-gray-600 hover:bg-gray-700 mt-4 w-full"
                    >
                        Send Message
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default ContactPage;
