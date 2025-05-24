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
            return res.status(400).json({success : false,  message : "Validation error", error : "Email already exists"})
        }
     
        CandidateController.createCandidate(body)
        .then(candidate =>  res.status(201).json({ success: true, message : candidate }))
        .catch(error =>{
            return res.status(400).json({ success: false, message : "Validation error", error : error.errors });
        })
    }
    catch(err){
        return res.status(500).json({message : "Internal server error"})
    }
})

router.patch("/candidate/:id", async(req,res)=>{
    try{
        const body = req.body;
        const { id }= req.params;

        if(!body.email){
            return res.status(400).json({success: false, message : "Validation error", error : "Email is required" })
        }

        const existingEmail = await CandidateController.findCandidateByEmail(body.email)

        if(existingEmail){
            return res.status(400).json({success : false,message : "Validation error", error : "Email already exists"})
        }  

        CandidateController.editCandidate(id, body)
        .then(candidate => {
           return res.status(200).json({success : true, message : candidate})
        })
        .catch(error =>{
            return res.status(400).json({ success: false, message : "Validation error", error : error.errors });
        })
    }
    catch(err){
        return res.status(500).json({message : "Internal server error"})
    }
})


module.exports = router