FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install npm in the container
RUN npm install

# Bundle app source
COPY . .

# Map port for use by Docker daemon
EXPOSE 8080

# Define the command to run the app
CMD [ "npm", "start" ]