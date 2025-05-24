const router = require('express').Router();
const CandidateController = require("../controllers/candidate.controller")

router.post("/candidate", async(req, res)=>{
    try{
        const body = req.body;

        if(!body.email){
            return res.status(400).json({success: false, message : "Validation error", error : "Email is required" })
        }

        const existingEmail = await CandidateController.findCandidateByEmail(body.email)

        if(existingEmail){
            return res.status(400).json({success : false, message : "Username with existing email already exists"})
        }
     
        CandidateController.createCandidate(body)
        .then(candidate =>  res.status(201).json({ success: true, candidate }))
        .catch(error =>{
            return res.status(400).json({ success: false, message : "Validation error", error : error.errors });
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message : "Internal server error"})
    }
})

router.patch("/candidate", async(req,res)=>{
    try{
        const body = req.body;
        if(!body.email){
            return res.status(400).json({success: false, message : "Validation error", error : "Email is required" })
        }

        const existingEmail = await CandidateController.findCandidateByEmail(body.email)

        if(existingEmail){
            return res.status(400).json({success : false, message : "Username with existing email already exists"})
        }

        CandidateController.editCandidate(body)
        .then(candidate => res.status(200).json({success : true, candidate}))
        .catch(error =>{
            return res.status(400).json({ success: false, message : "Validation error", error : error.errors });
        })
    }
    catch(err){
        return res.status(500).json({message : "Internal server error"})
    }
})


module.exports = router