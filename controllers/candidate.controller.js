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
            throw error;
        });
    }

    async editCandidate(id, data){
        try {
            const [rowsUpdated] = await Candidate.update(data, { where: { id } });

            if (rowsUpdated === 0) {
                throw new Error("Candidate not found");
            }


            const updatedCandidate = await Candidate.findByPk(id);
            return updatedCandidate;
        } catch (error) {

            throw error;
        }
    }
    
}

module.exports =  new CandidateController()