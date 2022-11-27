import { ok, HttpResponse } from '../../utils/http'

type User = {
  id: number;
  name: string;
}

export class GetUsers {
  async execute(): Promise<HttpResponse> {
    const users: User[] = [
      { id: 1, name: 'Leonardo' },
      { id: 2, name: 'Michelle' },
    ]

    return ok(users)
  }
}

