FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# When building code for production
# RUN npm install --only=production

# Build and Bundle app source
COPY . .
RUN npm run build

# define app ports
ENV PORT 8001
EXPOSE 8001

# run the app
CMD ["node", "dist/"]

