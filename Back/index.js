const dbMem = require("../db/memory");
const mongoose = require("mongoose");
const testemonymodel = require("../models/testemonies");

const closeDB = () => dbMem.closeDatabase();

dbMem.connect().then(() => {
  const testemony = new testemonymodel(body);
  testemony
    .save()
    .then((_) => {
      return testemonymodel
        .find({})
        .exec()
        .then((testemonies) => {
          console.log(testemonies);
          closeDB();
        });
    })
    .catch((err) => {
      throw err;
    });
  return;
});
