const express = require("express");
const vendorRouter = express.Router();
const {
  addVendorRegistration,
  login,
} = require("../controllers/vendorController");

vendorRouter.post("/vendor-registration", addVendorRegistration);
vendorRouter.post("/vendor-login", login);

module.exports = vendorRouter;
