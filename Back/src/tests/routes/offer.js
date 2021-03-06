process.env.NODE_ENV = "test";
const mongoose = require("mongoose");
const testemonymodel = require("../../models/testemonies");
//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const { server, end } = require("../../app");
const should = chai.should();
const dbMem = require("../../db/memory");

chai.use(chaiHttp);
before(async () => {
  await end;
  await dbMem.clearDatabase();
  return;
});

after(async () => {
  dbMem.closeDatabase();
  return end.then((val) => val.close());
});

const body = {
  title: "Estágio boladão 356",
  type: "Estágio",
  requirements: "Ciclo Básico completo",
  site: "www.ufr.br",
  tags: ["Estágio", "Boladão"],
  description:
    "Vivamus ultricies quis orci ut sodales. Quisque maximus quis diam eget lobortis. Sed rutrum porttitor urna, at pulvinar orci accumsan eget. Donec congue elit tellus, varius tincidunt nisi laoreet at. Aliquam ut auctor lorem. Proin arcu nisl, dapibus ut finibus semper, dignissim quis massa. Donec pellentesque dignissim ligula et placerat. ",
  deadline: Date.now(),
  pay: 300,
  beginningDate: Date.now(),
  localization: "CT",
  neededHours: 8,
  user: {
    description: "Empresa Boladona",
    email: "boladona@boladona.com",
  },
};

describe("Testemonies", () => {
  describe("/GET testemony", () => {
    it("it should GET no book", (done) => {
      chai
        .request(server)
        .get("/testemony")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
    it("it should GET a list with created book", (done) => {
      const createdTestemonies = new testemonymodel(body);
      createdTestemonies.save((err, testemony) => {
        chai
          .request(server)
          .get("/testemony/")
          .end((err, res) => {
            //console.log(res)
            res.body[0].should.be.a("object");
            res.should.have.status(200);
            res.body.should.be.a("array");
            res.body.length.should.be.eql(1);
            Object.keys(body).forEach((val) => {
              res.body[0].should.have.property(val);
            });
            done();
          });
      });
    });
  });

  describe("/POST testemony", () => {
    it("it should create a testemony with all correct keys", (done) => {
      const body = {
        title: "Estágio boladão 355",
        type: "Estágio",
        requirements: "Ciclo Básico completo",
        site: "www.ufr.br",
        tags: ["Estágio", "Boladão"],
        description:
          "Vivamus ultricies quis orci ut sodales. Quisque maximus quis diam eget lobortis. Sed rutrum porttitor urna, at pulvinar orci accumsan eget. Donec congue elit tellus, varius tincidunt nisi laoreet at. Aliquam ut auctor lorem. Proin arcu nisl, dapibus ut finibus semper, dignissim quis massa. Donec pellentesque dignissim ligula et placerat. ",
        deadline: Date.now(),
        pay: 300,
        beginningDate: Date.now(),
        localization: "CT",
        neededHours: 8,
        user: {
          description: "Empresa Boladona",
          email: "boladona@boladona.com",
        },
      };
      chai
        .request(server)
        .post("/testemony")
        .send(body)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          Object.keys(body).forEach((val) => {
            res.body.should.have.property(val);
          });
          done();
        });
    });
  });

  describe("/GET/:id testemony", () => {
    it("it should GET a testemony by the given id", (done) => {
      const createdTestemonies = new testemonymodel(body);
      createdTestemonies.save((err, testemony) => {
        chai
          .request(server)
          .get("/testemony/" + testemony.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            Object.keys(body).forEach((val) => {
              res.body.should.have.property(val);
            });
            res.body.should.have.property("_id").eql(createdTestemonies.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id book", () => {
    it("it should UPDATE a book given the id", (done) => {
      const createdTestemonies = new testemonymodel(body);
      const change = { title: "Estágio Super boladão" };
      createdTestemonies.save((err, testemony) => {
        chai
          .request(server)
          .put("/testemony/" + testemony.id)
          .send(change)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            Object.keys({ ...body, ...change }).forEach((val) => {
              res.body.should.have.property(val);
            });
            done();
          });
      });
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe("/DELETE/:id book", () => {
    it("it should DELETE a book given the id", (done) => {
      const createdTestemonies = new testemonymodel(body);
      createdTestemonies.save((err, testemony) => {
        chai
          .request(server)
          .delete("/testemony/" + testemony.id)
          .end((err, res) => {
            res.should.have.status(204);
            res.body.should.be.a("object");
            done();
          });
      });
    });
  });
});
