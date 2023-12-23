const mongoose = require("mongoose");

const soldierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assets: [
    {
      weapons: Number,
    },
    {
      kits: Number,
    },
    {
      vehicles: Number,
    },
    {
      medals: Number,
    },
    {
      assignments: Number,
    },
    {
      'dog tags': Number,
    },
    {
      battlepacks: Number,
    },
  ],
  wins: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  kills: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Soldier", soldierSchema);;
  