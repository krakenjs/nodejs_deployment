FROM mhart/alpine-node:6

COPY . .

RUN npm i && npm i -g pm2

EXPOSE 8000

CMD pm2-docker env.json
