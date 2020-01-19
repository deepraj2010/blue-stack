FROM node:12.14

WORKDIR "/app"

COPY ./package.json ./

RUN npm install

COPY ./src ./src
COPY ./.babelrc ./.babelrc
RUN mkdir ./config
COPY ./config/production.json ./config/

RUN npm run build

CMD ["npm", "start"]