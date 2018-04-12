FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY ./package*.json ./

COPY . .

RUN npm install
RUN npm run build-ts
# When building code for production
# RUN npm install --only=production

# define app ports
ENV PORT 8001
EXPOSE 8001

RUN npm run serve

# run the app
#CMD ["node", "/usr/src/app/dist/server.js"]

