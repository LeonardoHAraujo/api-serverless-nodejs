import { APIGatewayEvent, Context } from 'aws-lambda'

import { badRequest, serverError } from '../utils/http'
import { GetUsersFactory } from '../infra/factories/usecases/get-users-factory'

export const handle_requests = async (event: APIGatewayEvent, ctx: Context) => {
  // Main function: dispatch to UseCases.

  if (event.httpMethod == 'GET') {
    try {
      if (event.resource == '/') {
        const usecase = await GetUsersFactory.build()
        return await usecase.execute()

      } else {
        return badRequest(new Error('Path not found.'))
      }

    } catch (error) {
      // Improve log.
      console.log({ error })

      return serverError(new Error('Internal server error.'))
    }

  } else {
    return badRequest(new Error('Method not allowed.'))
  }
}

