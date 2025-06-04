export const corsConfig = {
  origin: [
    'http://localhost:3000',
    // Add more domains here as needed
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}; 