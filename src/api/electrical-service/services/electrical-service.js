'use strict';

/**
 * electrical-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::electrical-service.electrical-service');
