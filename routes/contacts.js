const express = require("express");
const router = express.Router();

const ContactsController = require("../controllers/contacts");

router.get("/", ContactsController.getAll);

router.get("/:id", ContactsController.getByID);

router.post("/", ContactsController.createContact);

router.put("/:id", ContactsController.updateContact);

router.delete("/:id", ContactsController.deleteContact);

module.exports = router;