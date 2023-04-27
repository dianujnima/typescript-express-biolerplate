import { Get, Route, Tags,  Post, Body, Path, Delete } from "tsoa";
import {getUsers, createUser, IUserPayload, getUser, deleteUser, User} from '../repositories/user.repository'

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers()
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body)
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return getUser(Number(id))
  }

  @Delete("/:id")
  public async deleteUser(@Path() id: string): Promise<string | null> {
    return deleteUser(Number(id))
  }
}