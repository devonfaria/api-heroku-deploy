const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Running on: http://localhost:${PORT}`);
  });
});
