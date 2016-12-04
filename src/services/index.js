/**
 * Created by dhanyapai on 11/26/16.
 */
var express = require('express');
var backendRouter = express.Router();


var backendCommentRoutes = require('./comments');
var backendCustomerRoutes = require('./customers');
var backendCouponRoutes = require('./coupons');
var backendVendorRoutes = require('./vendors');

backendRouter.use('/comments', backendCommentRoutes);
backendRouter.use('/coupons', backendCouponRoutes);
backendRouter.use('/customers', backendCustomerRoutes);
backendRouter.use('/vendors', backendVendorRoutes);

module.exports = backendRouter;

