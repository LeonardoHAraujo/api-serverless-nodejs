import { HttpResponse } from '../protocols/http'

export const ok = (data: any): HttpResponse => ({
  isBase64Encoded: false,
  body: JSON.stringify(data),
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: 200,
})

export const badRequest = (error: Error): HttpResponse => ({
  isBase64Encoded: false,
  body: JSON.stringify(error),
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: 400,
})
