FROM node:10
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

# EXPOSE 3000
RUN adduser --disabled-password apiuser
USER apiuser

CMD ["npm", "start"]
