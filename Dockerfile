# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package manifests and install dependencies first for better caching
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Use a non-root user for improved security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /usr/src/app
USER appuser

# Expose the fallback port; ECS task definition can override this via PORT
EXPOSE 8080
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
