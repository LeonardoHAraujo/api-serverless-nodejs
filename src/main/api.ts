// import { APIGatewayEvent, Context } from 'aws-lambda'

import { ok } from './helpers/httpHelper'

export const handle_requests = async (/*event: APIGatewayEvent, ctx: Context*/) => {
  return ok({ message: "Hello" })
}

