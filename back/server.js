require('dotenv').config();
require('./db/mongoose');

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const userController = require('./controllers/user-restful');

const urlArray = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, cb) => {
        if (urlArray.indexOf(origin) != -1 || !origin) {
            cb(null, true)
        } else {
            cb(new Error(`Origin not allowed by CORS!!!: ${origin}`))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/user', userController)

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
