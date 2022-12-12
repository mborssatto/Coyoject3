FROM node:alpine

# As soon as we have node installed add nodemon as a global dependency for development
RUN npm install -g nodemon

# Creates a folder in the docker container called ‘app’. In here all of our code will be housed
WORKDIR /app

# By adding this line, we make sure npm install runs only when dependencies are changed
ADD package.json package-lock.json ./

RUN npm install

# The rest of the source code gets added after the npm install line
ADD bin ./bin
ADD src ./src

# not 'npm run start' now that nodemon is installed for development environment
CMD ["nodemon"]
