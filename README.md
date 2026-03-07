# State Management in React

This repository contains examples and implementations of state management in React applications, including Context API and authentication systems.

## Projects

### 1. Context API Example (`contextapi/`)
A React application demonstrating the use of React Context API for state management.

**Features:**
- User authentication with login/logout
- Protected routes
- Context-based state sharing

**Tech Stack:**
- React
- Vite
- React Router DOM

**Getting Started:**
```bash
cd contextapi
npm install
npm run dev
```

### 2. Authentication App (`auth/`)
A full-stack authentication application with React frontend and Node.js backend.

**Frontend (`auth/frontend/`):**
- React app with authentication UI
- Protected routes
- User dashboard and profile pages

**Backend (`auth/backend/`):**
- Node.js/Express server
- JWT authentication
- User registration and login

**Tech Stack:**
- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, JWT, bcrypt

**Getting Started:**
```bash
# Backend
cd auth/backend
npm install
npm run dev

# Frontend (in another terminal)
cd auth/frontend
npm install
npm run dev
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tebarek94/statemangemenentinreact.git
cd statemangemenentinreact
```

2. Install dependencies for each project as described above.

## Usage

- **Context API Example**: Navigate to `contextapi/` and run the development server to see Context API in action.
- **Authentication App**: Run both backend and frontend servers to test the full authentication flow.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).