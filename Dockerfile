FROM node:20-alpine

WORKDIR /app

# Install dependencies based on package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Keep the entrypoint outside /app so the development bind mount cannot replace it.
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN sed -i 's/\r$//' /usr/local/bin/docker-entrypoint.sh \
    && chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["npm", "run", "dev"]
