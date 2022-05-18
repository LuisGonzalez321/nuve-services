'use strict';

/**
 * auth-admin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth-admin.auth-admin');
