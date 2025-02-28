const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const users = require('./routes/users');

dotenv.config();
const app = express();
const swaggerDocs = require('./swagger');
swaggerDocs(app);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', users);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
