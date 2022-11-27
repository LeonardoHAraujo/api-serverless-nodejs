import { GetUsers } from '../../../domain/usecases/get-users'

export class GetUsersFactory {
  static async build(): Promise<GetUsers> {
    return new GetUsers()
  }
}

