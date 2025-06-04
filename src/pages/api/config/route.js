import hello from '../_routes/hello';

export const configureRoutes = (app) => {
  app.route('/hello', hello);
  // Add more routes here as needed
}; 