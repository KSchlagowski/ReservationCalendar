const express = require("express");
const { createEvent, getAllEvents, createMockEvents } = require("./EventController");

const router = express.Router();

router.route("/events")
    .get(getAllEvents)
    .post(createEvent);
    
router.route("/events/mock")
    .post(createMockEvents);

module.exports = router;