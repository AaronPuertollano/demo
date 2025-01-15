FROM node
COPT package.json
RUN npm install
RUN npm init
