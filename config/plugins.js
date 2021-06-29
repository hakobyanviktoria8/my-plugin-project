module.exports = ({ env }) => ({

  //aws-s3 provider
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'aws-region',
      params: {
        Bucket: 'my-bucket',
      },
    },
  },


  // send email in mailtrap
  /*email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER', 'c06ede2f6c967a'),
      password: env('MAILTRAP_PASSWORD', '538aaab7b68d0b')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'default@value.com'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'default@value.com'),
    },
  }*/
  // ...
});
