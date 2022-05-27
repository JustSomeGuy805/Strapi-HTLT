module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS',['tempKey1','tempKey2']), // keys will be replaced by dokku using config:set
  },
});
