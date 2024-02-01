import { User, UserService } from "./UserService"

describe("UserService", () =>{
  const mockDb: User[] = []
  const userService = new UserService(mockDb)
  it("should create an user", () => {
    const mockConsole = jest.spyOn(global.console, "log")
    userService.createUser("name test", "test.db@email.com")

    expect(mockConsole).toHaveBeenCalledWith("DB atualizado.", mockDb)
    
  })
})