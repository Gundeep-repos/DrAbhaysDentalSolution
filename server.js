const express = require('express');
const connectDb = require('./config/db');

//initializing the app
const app = express();

//db connectivity
connectDb();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

//Defining routes
app.use('/api/staffuser', require('./routes/api/staffUser'));
app.use('/api/staffregister', require('./routes/api/staffRegister'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/manageadmin', require('./routes/api/manageAdmin'));
app.use('/api/adminregister', require('./routes/api/adminRegister'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
