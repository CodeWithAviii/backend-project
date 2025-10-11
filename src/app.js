// Importing required dependencies
import express from "express";         // Core framework to create the web server
import cors from "cors";               // Middleware to handle cross-origin requests
import cookieParser from "cookie-parser"; // Helps read cookies from incoming requests

// Initialize express application
const app = express();

// Configure CORS to allow requests from specific frontend origins
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,   // Allowed frontend origin (from .env file)
    credentials: true,                 // Allow cookies and credentials to be sent
  })
);

// Parse incoming JSON and form data with size limits
app.use(express.json({ limit: "10mb" })); // Handles JSON body (e.g., API requests)
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Handles form submissions

// Serve static files from the 'public' folder (images, CSS, JS, etc.)
app.use(express.static("public"));

// Enable cookie parsing for authentication or session handling
app.use(cookieParser());

// Export app instance for use in server.js or index.js
export { app };
