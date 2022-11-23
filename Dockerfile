FROM node:14-alpine as base
RUN apk add --no-cache git

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app

RUN yarn install --frozen-lockfile --production

FROM amazon/aws-lambda-nodejs:14 as worker

WORKDIR /app

COPY yarn.lock /app/
COPY package.json /app/

COPY build /app/bin

COPY --from=base /app/node_modules /app/node_modules

ENV NODE_ENV=production

ENV PORT=3000
EXPOSE 3000

CMD [ "/app/bin/main/api.handle_requests" ]
