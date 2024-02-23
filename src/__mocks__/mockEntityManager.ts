import { EntityManager } from "typeorm";

interface MockManagerArgs{
  saveReturn?: object | [object]
}

export const mockEntityManager = async ({saveReturn = undefined}: MockManagerArgs): Promise<EntityManager> => {
  const manager: Partial<EntityManager> = {}
  
  manager.save = jest.fn().mockImplementation(() => Promise.resolve())

  return manager as EntityManager
}