FROM node:22 AS build
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]

FROM httpd:2.4
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
EXPOSE 80

