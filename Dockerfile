# base image
FROM node:18-alpine

# set working directory inside container
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code (project code)
COPY . .

# expose port
EXPOSE 7272

# start the application
CMD ["npm", "start"]
