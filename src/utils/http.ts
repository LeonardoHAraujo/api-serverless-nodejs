export type HttpResponse = {
  isBase64Encoded: boolean;
  body: any;
  headers: any;
  statusCode: number;
}

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

export const serverError = (error: Error): HttpResponse => ({
  isBase64Encoded: false,
  body: JSON.stringify(error),
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: 500,
})

