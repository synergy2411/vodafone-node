// const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const UserModel = require("../controller/model/user.model");

chai.use(chaiHttp);

describe("Users Resource", () => {
    beforeEach(async ()=> {
        await UserModel.deleteMany()
    })

    describe("GET Single user", () => {
        it("/GET/{id}", (done) => {
            const user = new UserModel({ name : "John Doe", email : "john@test.com", age : 32, isAdmin : true})
            user.save((err, res) => {
                chai.request(app)
                    .get("/users/"+user._id)
                    .end((err, res) => {
                        chai.expect(res.status).to.be.eql(200)
                        chai.expect(res.body.name).to.be.eql("John Doe")
                        done()
                    })
            })
        })
    })

    describe("POST Users", () => {
        it("/POST", (done) => {
            let user = { name : "John Doe", email : "john@test.com", age : 32, isAdmin : true}
            chai.request(app)
                .post("/users")
                .send(user)
                .end((err, res) => {
                    chai.expect(res.status).to.be.eql(200);
                    chai.expect(res.body.name).to.be.eql(user.name);
                    chai.expect(res.body._id).not.to.be.undefined;
                    done()
                })
            })
    })

  describe("GET Users", () => {
    it("/GET", (done) => {
      chai
        .request(app)
        .get("/users")
        .end((err, res) => {
          chai.expect(res.status).to.eql(200);
          chai.expect(res.body.payload).to.be.a("array");
          chai.expect(res.body.payload.length).to.eql(0);
          done();
        });
    });
  });
});
