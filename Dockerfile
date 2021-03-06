FROM node:8

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
