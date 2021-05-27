const testemonymodel = require("../../models/testemonies");
const c = require("../../config")();

const seedTestemoniess = [

  {
    title: "Introdução à Computação Quântica",
    testemony: "Bruno Dantas",
    advisor: "Franklin de Lima Marquezino",
    otherResearchers: ["Guilherme Goldman da Silva"],
    videoUrl: "https://youtube.com/NAOTEMVIDEOAINDA",
    testimony: "Lorem Ipsum.",
    otherInformations: "",
    startDate: Date.parse("2018-08-11"),
    endDate: Date.parse("2020-02-19"),
    location: "CT",
    user: {
      email: "bruno.dantas@poli.ufrj.br",
    },
  },

];


const promise = new Promise((resolve, rejcet) => {
  if (c.isProduction() || process.env.NODE_ENV === "test") resolve();
  else {
    testemonymodel
      .findOne({})
      .exec()
      .then((testemonies) => {
        if (testemonies === null) {
          testemonymodel.insertMany(seedTestemoniess);
        }
        resolve();
      })
      .catch((err) => {
        rejcet(err);
      });
  }
});

//const promise =
module.exports = promise;
