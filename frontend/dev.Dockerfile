FROM node:16-alpine3.11 AS BUILDER


# Creates a folder in the docker container called ‘app’. In here all of our code will be housed
WORKDIR /app

# By adding this line, we make sure npm install runs only when dependencies are changed
ADD package.json package-lock.json ./

RUN npm install


ADD public ./public
ADD .browserslistrc .eslintrc.js babel.config.js vue.config.js ./

CMD [ "npm", "run", "dev" ]
