const express = require("express");
const { createEvent, getAllEvents, createMockEvents, updateEvent } = require("./EventController");

const router = express.Router();

router.route("/events")
    .get(getAllEvents)
    .post(createEvent)
    .put(updateEvent);
    
router.route("/events/mock")
    .post(createMockEvents);

module.exports = router;