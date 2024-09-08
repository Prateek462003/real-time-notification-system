# Dockerfile for real-time-service

# Use Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR .

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files to the working directory
COPY . .

# Set the working directory for app source
WORKDIR /usr/src/app/src

# Expose the port for real-time service
EXPOSE 3000

# Start the real-time service
CMD ["npm", "start"]
