const router = require('express').Router();
const CandidateController = require("../controllers/candidate.controller")

router.post("/candidate", async(req, res)=>{
    try{
        const body = req.body;

        const existingEmail = await CandidateController.findCandidateByEmail(body.email)

        if(existingEmail){
            res.status(400).json({success : false, message : "Username with existing email already exists"})
        }
    
        CandidateController.createCandidate(body)
        .then(candidate =>  res.status(201).json({ success: true, candidate }))
        .catch(error =>{
            res.status(400).json({ success: false, error: error.message });
        })
    }
    catch(err){
        res.status(500).json({message : "Internal server error"})
    }
})

router.patch("/candidate", async(req,res)=>{
    try{
        const body = req.body;

        CandidateController.editCandidate(body)
        .then(candidate => res.status(200).json({success : true, candidate}))
        .catch(error =>{
            res.status(400).json({ success: false, error: error.message });
        })
    }
    catch(err){
        res.status(500).json({message : "Internal server error"})
    }
})


module.exports = router