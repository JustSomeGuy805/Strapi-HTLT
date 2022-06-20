'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');
    const extension = ({ nexus }) => ({
      // GraphQL SDL

      types: [
        nexus.objectType({
          name: "Rene",
          definition(t) {
            t.int('age')
          }
        }),
        nexus.extendType({
          type: "Query",
          definition(t) {
            t.field('joe', {
              type: "Rene", resolve() {
                console.log("yoyoyo");
                return {age: 5}
              }
            })
          }
        }),

      ],

      resolversConfig: {
        "Query.joe": {
          auth: false
        },
      },



    })

    extensionService.use(extension);

  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
