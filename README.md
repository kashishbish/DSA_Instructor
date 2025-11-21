Rude DSA Instructor Chatbot

This project is a web-based chatbot that behaves like a Data Structures and Algorithms (DSA) instructor. The chatbot answers DSA-related questions politely in simple language. If the user asks something unrelated to DSA, the bot responds in a deliberately rude tone, as defined in the system prompt.
The project uses Google's Generative Language API (Gemini models) to generate responses.

Features
Lightweight web interface built with HTML, CSS, and JavaScript
Real-time responses through the Gemini API
Controlled behavior using system instructions
Polite explanations for DSA questions
Intentionally rude replies for non-DSA queries
Supports "Enter" key submission

Tech Stack
HTML
CSS
Vanilla JavaScript
Google Generative Language API (Gemini Models)

How It Works
The user enters a question in the input field.
The system instruction enforces the chatbot’s behavior:
For DSA questions: polite and simplified explanations
For non-DSA questions: intentionally rude replies

The question is sent to the Gemini API using the generateContent endpoint.
The API returns the generated message, which is displayed in the UI
