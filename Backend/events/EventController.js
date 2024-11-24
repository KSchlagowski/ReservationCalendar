const Event = require("./Event");

exports.createEvent = async (req, res) => {
    try {
        const { title, start } = req.body;
        const event = await Event.create({ title, start });
        res.json({ message: "Event created successfully", event });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
}

exports.getAllEvents = async (req, res) => {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
};

exports.createMockEvents = async (req, res) => {
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2025, 0, 1); 

    try {
        for (let date = new Date(startDate); date < endDate; date.setDate(date.getDate() + 1)) {
            date.setUTCHours(16);
            await Event.create({ title: 'Wolne', start: date.toISOString() });
            date.setUTCHours(17);
            await Event.create({ title: 'Wolne', start: date.toISOString() });
            date.setUTCHours(18);
            await Event.create({ title: 'Wolne', start: date.toISOString() });
        }
        res.json({ message: "Mock events created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
}