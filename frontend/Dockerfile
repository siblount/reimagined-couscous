# frontend/Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

COPY frontend/package*.json ./frontend/

RUN npm install

COPY frontend ./frontend

# Copy shared folder
COPY ../shared ./shared

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

WORKDIR /app/frontend
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]