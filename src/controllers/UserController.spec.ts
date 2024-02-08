import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request,} from "express"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { makeMockRequest } from "../__mocks__/mockRequest.mock"

describe("userController", () => {

  const mockUserService: Partial<UserService> = {  // classes also can be used as a type
    createUser: jest.fn().mockReturnValue(true),
    deleteUser: jest.fn().mockReturnValue(true)
  }

  const userController = new UserController(mockUserService as UserService)

  it("should create an user", () => {

    const mockRequest = {
      body: {
        name: 'User Test',
        email: 'new.test@email.com'
      }
    } as Request

    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    console.log(mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({message: "User created."})

  })
  it("Should throw an error if name or email are not provided", () => {

    const mockRequest = {
      body: {
        name: "User Test",
        email: ""
      }
    } as Request
    const mockResponse = makeMockResponse()

    userController.createUser(mockRequest, mockResponse)
    
    console.log(mockResponse)
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({message: "Bad request. Invalid user name or email."})
  })

  it("should delete an user", () => {
    const mockResponse = makeMockResponse()
    const mockRequest = makeMockRequest({params: {"id":"1"}})
    userController.deleteUser(mockRequest, mockResponse)
    
    console.log(mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toMatchObject({message: 'User successfully deleted.'})
  })

})