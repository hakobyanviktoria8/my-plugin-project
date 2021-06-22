# Strapi application
A quick description of your strapi application

#work
yarn start

#plugin add
yarn strapi generate:plugin customPlugin

#http://localhost:8000/
yarn develop --watch-admin

#email plugin
yarn add strapi-provider-email-mailtrap



#new plugin
strapi generate:plugin import-content
strapi generate:model importconfig --plugin import-content
strapi generate:model importeditem --plugin import-content

#Now it’s time to install our dependencies.
yarn add content-type-parser@1.0.2 csv-parse@4.8.2 get-urls@9.2.0 moment rss-parser@3.7.3 request simple-statistics@7.0.7 striptags@3.1.1 lodash
yarn build
yarn develop --watch-admin


