const express = require('express');
const {
    getNumbers,
    getColors,
    getAnimals
    }=require('../controllers/game.control.js')

    const router=express.Router()

// router.get('/',getNumbers)
router.get('/numbers',getNumbers)
router.get('/colors',getColors)
router.get('/animals',getAnimals)

module.exports=router;