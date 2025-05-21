const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const sequelize = require('./config/database');
const User = require('./models/User');
const Task = require('./models/Task');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => console.log('Database synced'));
