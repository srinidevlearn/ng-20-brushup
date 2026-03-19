# Stage 1: Dependencies Layer (cached independently)
FROM node:20-alpine AS dependencies

WORKDIR /workspace

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    bash

# Install Angular CLI globally
RUN npm install -g @angular/cli@20

# Copy package files ONLY (this triggers rebuild only if dependencies change)
COPY package.json package-lock.json ./

# Install dependencies with cache optimization
RUN npm ci --prefer-offline --no-audit

# Stage 2: Development Environment
FROM node:20-alpine

WORKDIR /workspace

# Copy pre-installed node_modules from stage 1
COPY --from=dependencies /workspace/node_modules ./node_modules
COPY --from=dependencies /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=dependencies /usr/local/bin /usr/local/bin

# Install minimal runtime dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    bash

# Expose ports: 4200 (dev server), 3000 (alternative), 8080 (alternative)
EXPOSE 4200 3000 8080

# Use bash instead of sh for better terminal experience
SHELL ["/bin/bash", "-c"]

# Default command
CMD ["/bin/bash"]