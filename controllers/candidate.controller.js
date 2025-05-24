const Candidate = require("../models/candidate")

class CandidateController {

    async findCandidateByEmail (email) {
        const candiate = await Candidate.findOne({where : {email : email}, attributes: ['email']})

        return candiate
    }
    
}

module.exports =  new CandidateController()