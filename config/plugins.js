module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER', 'c06ede2f6c967a'),
      password: env('MAILTRAP_PASSWORD', '538aaab7b68d0b')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'default@value.com'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'default@value.com'),
    },
  }
  // ...
});
