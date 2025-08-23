# HealthGPT - AI-Powered Healthcare Assistant

## Live Demo
Visit the live application at: [HealthGPT](https://healthgpt-pro.vercel.app/)

## Overview
HealthGPT is an interactive chatbot application that leverages AI to provide health-related information and assistance. Built with React for the frontend and Express.js for the backend, it integrates with the AIML API to provide intelligent responses to health queries.

## Features
- Real-time chat interface
- AI-powered responses using AIML API
- Modern and responsive UI design
- Secure API key handling through backend integration

## Tech Stack
- Frontend: React.js
- Backend: Express.js
- API: AIML API
- Styling: CSS Modules

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd healthgpt
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Configure environment variables:
Create a `.env` file in the server directory:
```
API_KEY=your_aiml_api_key_here
PORT=5000
```

### Running the Application
1. Start the backend server:
```bash
cd server
node server.js
```

2. In a new terminal, start the frontend:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure
```
healthgpt/
├── src/                 # Frontend source files
│   ├── components/      # React components
│   └── utils/          # Utility functions
├── server/             # Backend server files
│   └── server.js       # Express server configuration
└── README.md           # Project documentation
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the