module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi-learn-tagalog'),
      user: env('DATABASE_USERNAME', 'strapi-learn-tagalog'),
      password: env('DATABASE_PASSWORD', 'MkoNji8900^'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
