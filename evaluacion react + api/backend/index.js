const tanSchema = require("./src/routers/tanqueor")
const carSchema = require("./src/routers/carror");
const express = require("express")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors =require('cors');
app.use(cors());

dotenv.config();


const mongoString = process.env.MONGODB;
const host = process.env.HOST;

console.log(mongoString);
console.log(host);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/api', tanSchema)
app.use('/api', carSchema)


  
const port = process.env.PORT || 4000;
app.listen(port,()=>
    console.log(`servidor corriendo en el puerto ${port}`)
    );
mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Conectado a la bd en mongoDB Atlas')
}).catch((err) => {
    console.error(`Se produjo un error: ${err}`)
});
      
 
