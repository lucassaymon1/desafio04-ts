import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController{

  userService: UserService // classes can be used to type a mock of this class

  constructor(userService = new UserService()){
    this.userService = userService
  }

  createUser = (request: Request, response: Response) => {
    const {name, email} = request.body

    if(!email || !name){
      return response.status(400).json({message: "Bad request. Invalid user name or email."})
    }

    const userCreated = this.userService.createUser(name, email)
    if(!userCreated){
      return response.status(401).json({message: "User already exists."})
    }
    response.status(201).json({message: "User created."})
  }

  getUser = (request: Request, response: Response) => {
    const {id} = request.params

    const user = this.userService.getUser(id)

    if(!user){
      return response.status(401).json({message: "User not found."})
    }
    
    response.status(200).json(user)
    
  }

  getAllUsers = (request: Request, response: Response) => {
    const users = this.userService.getAllUsers()

    if(!users){
      return response.status(401).json({message: "Unable to get all users."})
    }

    response.status(200).json(users)
  }

}