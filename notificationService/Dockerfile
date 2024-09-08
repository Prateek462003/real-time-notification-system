# Dockerfile for notification-service

# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR .

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code to the container
COPY . .

# Expose the port for notification service
EXPOSE 4001

# Start the notification service
CMD ["npm", "start"]
