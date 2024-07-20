const express = require("express");
const Referees = require("./models");
const router = express.Router();

router.get("/", async (req, res)=>{

})

router.post("/", async(req, res)=>{
    try {
        const referee =await Referees.create({
            referrerName: req.body.referrerName,
            referrerEmail: req.body.referrerEmail,
            refereeName:req.body.refereeName,
            refereeEmail:req.body.refereeEmail
        });
        return res.json(referee)
    } catch (error) {
        console.log("error", error)
    return res.json(error)
    }
    
})

module.exports = router; 