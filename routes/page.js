// import express from 'express'
// import router from express.Router();
const express = require("express");
const mongoDb = require("mongoose");
const router = express.Router();
const User = require('../database/models/user');
const db = require('../database/config/key').DBP;



//
///////
    // links & pages
///////
//
// home page
router.get('/', (req, res)=>{
    mongoDb.connect(db, (err, connect)=>{
        if (connect) {
            console.log("connected")
        }
        res.render("home")
    
    })
})



// login page
router.get('/login', (req, res)=>{
    res.render('login', {
        title: 'Login',
        class: 'active'
    })

})


// dasboard page
router.get('/dashboard', (req, res)=>{
    res.render('dashboard', {
        title: 'Dashboard'
    })  
})




//
///////
        // post & get routes
///////
//

router.post('/mongo', (req, res)=>{  // register memmbers route
    
    const newUser = new User()

        newUser.Dname = req.body.name,
        newUser.Dlastname =  req.body.lastname,
        newUser.Dnumber = req.body.number,
        newUser.Daddress = req.body.address,
        newUser.Dort = req.body.ort
    
    newUser.save((err, saved)=>{
        if(err){
            console.log("err")
            res.redirect("home");
            
        }
        res.render("home")
        console.log(saved);
        console.log(saved)
    })
    
})


// export route
module.exports = router;