const express = require("express");
const { retrieveAllBooks } = require("./retrieveAllBooks");

const router = express.Router();

router.get("/", retrieveAllBooks);

module.exports = router;
