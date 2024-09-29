FROM node:20.12.0-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 3003
CMD ["npm","start"]
