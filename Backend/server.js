import dotenv from 'dotenv';
dotenv.config({path:'./.env'});
import connection from "./src/db/index-db-.js";
import app from './app.js';

connection()
.then(() => {
    const server = app.listen(process.env.Port||8000, ()=>{
        console.log(`succesful server connection on port:${process.env.PORT}`);
    })

    server.on("error", (err)=>{
        console.log(`Server err ${err}`);
    })

})
.catch( (err) => {
    console.log(`Failed to coonect to the mongodb connection on the port: ${process.env.PORT}`);
})