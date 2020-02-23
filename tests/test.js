//   const assert = require('chai').assert;
//   const app = require('../app');

//   const acutalvalue= 'sample test'
//   describe('App', function(){
//       it('sample testing',function(){
//           const result = app();
//           assert.equal(result,acutalvalue);
//       });

//       it('sample test 2',function(){
//             const result = app();
//             assert.typeOf(result,'string');
//       });
//   })

import chai from "chai";
import chatHttp from "chai-http";
import app from "../app";

chai.use(chatHttp);
chai.should();

describe("Students", () => {
  describe("Get /", () => {
    it("describe here", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single student record
    it("should not get a single student record", done => {
      const id = 5;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
