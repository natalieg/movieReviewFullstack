    const mongoose = require('mongoose');
    let area = {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        todo: {
            type: String,
            required: true
        }
    }

const MovieReviewSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false,
        default: ' '
    },
    date: {
        type: Date,
        default: Date.now
    },
    areas: [
        // area
    ]

});

const MovieReview = mongoose.model('Movies',MovieReviewSchema);

module.exports = MovieReview;