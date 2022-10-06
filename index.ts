import express ,{Express, Request, Response} from "express"
import dotenv from "dotenv"

//Configuration .env file
dotenv.config();

//Crate Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000

//Define the first Route
app.get('/', (req: Request, res: Response)=> {

    //Send Hello World
    res.status(200).json({data: {message: 'Goodbye,world'}})
})

//Define the first Route
app.get('/hello', (req: Request, res: Response)=> {
    
    let name = req.query.name

    if (!name) name = 'anonimo'


    //Send Hello ${name}
    res.status(200).json({data: {message: `hola ${ name  } `}})
})

//Execute APP and Listen Request to PORT
app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

