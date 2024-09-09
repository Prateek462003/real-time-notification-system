# Dockerfile for client (Vite React)

# Use Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR .

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the Vite app
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose the port for the client
EXPOSE 5173

# Serve the built Vite app
CMD ["serve", "-s", "dist", "-l", "5173"]
