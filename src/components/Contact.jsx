import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div>
            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">Contact me</span>
                <div className="border-t border-gray-300 flex-grow"></div>
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
                    backgroundColor: "#f9f9f9",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
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
                    />
                    <TextField
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.subject}
                        onChange={handleChange}
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
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, width: "100%" }}
                    >
                        Send Message
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default ContactPage;
