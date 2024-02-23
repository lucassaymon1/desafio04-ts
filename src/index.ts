import 'reflect-metadata'
import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';
import { router } from './routes';
import { AppDataSource } from './database';


const server = express()

server.use(express.json())
server.use(router)

server.get('/', (request:Request, response: Response) =>{
  response.status(200).json({message: 'Git Bank API'})
})
// server.post('/user', userController.createUser)
// server.get('/user', userController.getAllUsers)
// server.get('/user/:id', userController.getUser)

server.listen(5000, () => {
  console.log("I'M ALIVE!")
})