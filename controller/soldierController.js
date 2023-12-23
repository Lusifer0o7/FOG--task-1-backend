const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Soldier = require("../models/soldierModel");

exports.getSoldierInfo = catchAsyncErrors(async (req, res, next) => {
    
    const soldier = await Soldier.find();
  
    res.status(200).json({
      success: true,
      soldier
    });
  });