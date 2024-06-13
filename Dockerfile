FROM node:20.12.2 as dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]

# FROM node:20.12.2 as dev
# WORKDIR /app
# COPY package*.json ./

# RUN npm install -g npm@10.8.1 && \
#     npm install && \
#     npm install -g vite

# COPY . .
# ENV VITE_BASE_URL=http://localhost:8080
# RUN npm run build
# EXPOSE 5173
# ENTRYPOINT [ "npm", "run" ]