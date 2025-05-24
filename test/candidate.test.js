const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const Candidate = require("../models").Candidate


chai.use(chaiHttp);
const { expect } = chai;

describe("POST and PATCH /candidate", () => {
 
    after(async () => {
        await Candidate.truncate()
    });

    let candidateId = null
  it("should create a candidate", async() => {

    const response = await chai.request(app)
      .post("/candidate")
      .send({
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        phoneNumber: "1112223333"
      })
    
      
    expect(response).to.have.status(201);

    const { id } = response.body.message.id
    candidateId = id
    expect(response.body.message).to.have.property("email", "janedoe@gmail.com");

  });

  it("should give existing email error", ()=>{
    return chai
      .request(app)
      .post("/candidate")
      .send({
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        phoneNumber: "1112223333"
      })
      .then(res => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("error", "Email already exists");
      });
  })

    it("should create a candidate with null firstName", async()=>{
        return chai
        .request(app)
        .post("/candidate")
        .send({
            lastName: "Doe",
            email: "jane@gmail.com",
            phoneNumber: "1112223333"
        })
        .then(res => {
            expect(res).to.have.status(400);
        });
  })
 it("should edit a created candidate", async() => {
    const createdResponse = await chai.request(app).post("/candidate")
    .send({
        firstName: "Jane",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        phoneNumber: "1112223333"
    })
    
    return chai
      .request(app)
      .patch(`/candidate/${createdResponse.body.message.id}`)
      .send({
        email: "john@gmail.com"
      })
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.have.property("email", "john@gmail.com");
      });
  });

  it("should not edit candidate if email exists", async()=>{
    return chai
      .request(app)
      .patch(`/candidate/${candidateId}`)
      .send({
        email: "john@gmail.com"
      })
      .then(res => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("error", "Email already exists");
      });
  })

});

