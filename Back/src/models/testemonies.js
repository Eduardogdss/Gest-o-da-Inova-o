const mongoose = require("mongoose");
const { Schema } = mongoose;

const testimonySchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    advisor: String,
    otherResearchers: [String],
    videoUrl: String,
    testimony: String,
    message: String,
    startDate: Date,
    endDate: Date,
    location: String,
    user: {
        email: String,
    },
});

const testemonyModel = mongoose.model("Testimony", testimonySchema);

module.exports = testemonyModel;
