const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(cors({ origin: '*' }));
app.use(express.json());

// AI API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const API_KEY = '4a2f35a01a5448ec84b757eee88a5488';
        const baseUrl = 'https://api.aimlapi.com/v1/chat/completions';

        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        };

        const data = {
            model: 'meta-llama/Llama-Vision-Free', // or GPT-5 if available
            messages: [
                {
                    role: 'system',
                    content: 'You are a knowledgeable and careful doctor. Answer the user’s questions thoughtfully and responsibly.'
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 800
        };

        const response = await axios.post(baseUrl, data, { headers });

        if (!response.data) {
            throw new Error('No response data received');
        }

        if (response.data.choices && response.data.choices[0]) {
            res.json({ message: response.data.choices[0].message.content });
        } else {
            throw new Error('Unexpected response format from API');
        }
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            response: error.response ? {
                status: error.response.status,
                data: error.response.data
            } : 'No response data'
        });

        // Handle rate limit errors specifically
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers['x-ratelimit-reset'] ||
                (new Date().getTime() + 60000).toString();
            return res.status(429).json({
                error: 'Rate limit exceeded. Please try again later.',
                retryAfter: retryAfter
            });
        }

        // Handle other errors
        res.status(error.response?.status || 500).json({
            error: 'An error occurred while processing your request',
            details: error.response?.data || error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
