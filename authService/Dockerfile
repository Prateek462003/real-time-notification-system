# Dockerfile for auth-service

# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR .

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code to the container
COPY . .

# Expose the port for auth service
EXPOSE 4000

# Start the auth service
CMD ["npm", "start"]