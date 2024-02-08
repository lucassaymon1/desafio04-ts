import { User, UserService } from "./UserService"

describe("UserService", () =>{
  const mockDb: User[] = []
  const userService = new UserService(mockDb)
  it("should create an user", () => {
    const mockConsole = jest.spyOn(global.console, "log")
    userService.createUser("name test", "test.db@email.com")

    expect(mockConsole).toHaveBeenCalledWith("DB atualizado.", mockDb)
    
  })

  it("should delete an user", () => {
    const mockDbDelete: User[] = [
      {
        id: "1",
        name: "test delete",
        email: "delete.db@email.com"
      }
    ]
    const userServiceDelete = new UserService(mockDbDelete)
    const mockConsole = jest.spyOn(global.console, "log")

    userServiceDelete.deleteUser("1")
    expect(mockConsole).toHaveBeenCalledWith("User deleted from database.", [])
  })
})