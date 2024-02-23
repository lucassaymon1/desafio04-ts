import { EntityManager } from "typeorm"
import { mockEntityManager } from "../__mocks__/mockEntityManager"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

describe("UserRepository", () => {
  let userRepository: UserRepository
  let mockManager: Partial<EntityManager>

  const mockUser: User = {
    user_id: "12345",
    name: "User Test",
    email: "test@email.com",
    password: "123456",
    balance: 0
  }

  beforeAll(async () => {
    mockManager = await mockEntityManager({})
    userRepository = new UserRepository(mockManager as EntityManager)
  })

  it("Should insert an user in the database", async () => {
    await userRepository.createUser(mockUser)
    expect(mockManager.save).toHaveBeenCalled()
  })
})