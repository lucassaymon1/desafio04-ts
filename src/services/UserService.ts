export interface User{
  id: string
  name: string
  email: string
}

const db = [
  {
    id: '1',
    name: 'Manoel Alves',
    email: 'manoelves@gmail.com'
  },
  {
    id: '2',
    name: 'Mary',
    email: 'mary@email.com'
  }
]

export class UserService {

  db: User[]

  constructor(database = db){
    // Se nenhum valor for fornecido para "database", o construtor atribuirá automaticamente a ele o valor de "db"
    this.db = database
  }
  createUser = ( name: string, email: string) => {
    const userExists = this.db.filter(user => user.email === email)
    
    if(userExists.length > 0){
      return false
    }
    const id = String(this.db.length + 1)
    const user = {
      id,
      name,
      email
    }
    this.db.push(user)
    console.log("DB atualizado.", this.db)
    return true
  }

  getUser = (id: string) => {
    const user = this.db.filter(item => item.id === id)

    if(user.length === 0 || !user){ 
      return false
    }
    return user

  }

  getAllUsers = () => {
    return this.db
  }
}