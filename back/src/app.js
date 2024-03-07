const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/userRoutes');
const employeeRoutes = require('./api/routes/employeeRoutes');
const otherRoutes = require('./api/routes/otherRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', employeeRoutes);
app.use('/api', otherRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
