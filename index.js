const express = require('express');
const body_parser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const CipaRoutes = require('./routes/CipaRoutes');

const dbConnect = require('./config/dbConnect');

const app = express();
dotenv.config();
dbConnect();
const PORT = 4000;

app.use(body_parser.json());
app.use(cors({
 
 credentials: true,
 origin: "http://localhost:3000"

}));

app.use('/cipa', CipaRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})