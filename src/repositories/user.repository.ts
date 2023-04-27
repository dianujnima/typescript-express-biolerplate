export interface IUserPayload {
  name: string;
  email: string
  password: string
}

export interface User {
  id: number;
  name: string;
  email: string
  password: string
}

export let users: User[] = [
  {id: 1, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 2, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 3, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 4, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 5, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 6, name: 'name', password: 'last', email: 'last@example.com'},
  {id: 7, name: 'name', password: 'last', email: 'last@example.com'},
]

export const getUsers = async () :Promise<Array<User>> => {
  return users;
}

export const createUser = async (payload: IUserPayload) :Promise<User> => {
  const id = Math.max(...users.map(o => o.id));
  const user = {
    id: id+1,
    ...payload,
  }
  users.push(user);
  return user;
}

export const getUser = async (id: number) :Promise<User | null> => {
  const user = users.find(user => user.id === id);
  return user || null;
}

export const deleteUser = async (id: number) :Promise<string | null> => {
  const removeIndex = users.map(item => item.id).indexOf(id);
  const user = (removeIndex >= 0) && users.splice(removeIndex, 1);
  return user ? 'User deleted successfully' : null;
}
