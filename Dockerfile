FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install --legacy-peer-deps --force
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]