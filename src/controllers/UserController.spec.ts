import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request,} from "express"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"

describe("userController", () => {

  const mockUserService: Partial<UserService> = {
    createUser: jest.fn().mockReturnValue(true)
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
})