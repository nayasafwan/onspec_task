const Candidate = require("../models").Candidate

class CandidateController {

    async findCandidateByEmail (email) {
        const candiate = await Candidate.findOne({where : {email : email}, attributes: ['email']})

        return candiate
    }

    async createCandidate(data) {
        return Candidate.create(data)
            .then(candidate => {
            return candidate;
            })
            .catch(error => {
            console.error('Error creating candidate:', error);
            throw error;
            });
    }

    async editCandidate(data){
        return Candidate.edit(data)
        .then(candidate =>{
            return candidate
        })
        .catch(error =>{
            throw error
        })
    }
    
}

module.exports =  new CandidateController()