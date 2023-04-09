FROM node:14

# CREATE APP DIRECTORY

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# BUNDLE APP SOURCE

COPY . .
EXPOSE 4040
CMD [ "npm", "run", "serve" ]
