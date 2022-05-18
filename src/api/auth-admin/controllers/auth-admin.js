'use strict';

/**
 *  auth-admin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::auth-admin.auth-admin');
