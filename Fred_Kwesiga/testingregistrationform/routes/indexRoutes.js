
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Testing = require('../models/Testing')


router.get('/',(req,res)=>{
  res.render('test', {title:"Corono Virus Testing", alert: req.query.alert})
})

router.post("/", async(req, res) => {
    try {
        const test = new Testing(req.body);
        console.log(test)
        await test.save()
        res.redirect('?alert=success')
    }
    catch (err) {
        res.status(400).render('test', { title: "Corono Virus Testing", alert: 'error' })
        console.log(err)
    }
})




module.exports = router;