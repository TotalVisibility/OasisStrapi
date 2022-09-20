'use strict';

/**
 * electrical-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::electrical-service.electrical-service');
