'use strict';

/**
 * auth-admin router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::auth-admin.auth-admin');
