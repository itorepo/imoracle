FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY ./package*.json ./

COPY . .

RUN npm install
RUN npm run build
# When building code for production
# RUN npm install --only=production

# define app ports
ENV PORT 8001
EXPOSE 8001

# run the app
CMD ["node", "dist/server.js"]

