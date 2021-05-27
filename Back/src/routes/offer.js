const testemonymodel = require("../models/testemonies");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", (req, res, next) => {
  const testemony = new testemonymodel(req.body);
  testemony
    .save()
    .then((testemony) => {
      res.status(201).json(testemony);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).send({ err });
      } else {
        next(err);
      }
    });
});

router.get("/", (req, res, next) => {
  testemonies = testemonymodel.find({}).exec();
  testemonies
    .then((testemonies) => {
      res.json(testemonies);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:testemonyId", (req, res, next) => {
  testemony = testemonymodel.findById(req.params.testemonyId).exec();
  testemony
    .then((testemony) => {
      if (testemony === null) {
        res.status(404).json({});
        return;
      }
      res.json(testemony);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ error: "Incorrect id" });
      } else {
        next(err);
      }
    });
});

router.put("/:testemonyId", (req, res, next) => {
  testemony = testemonymodel
    .findByIdAndUpdate(req.params.testemonyId, req.body, { new: true })
    .exec();
  testemony
    .then((testemony) => {
      if (testemony === null) {
        res.status(404).json({});
        return;
      }
      res.json(testemony);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ error: "Incorrect id" });
      } else {
        next(err);
      }
    });
});

router.delete("/:testemonyId", (req, res, next) => {
  testemony = testemonymodel.findByIdAndRemove(req.params.testemonyId).exec();
  testemony
    .then((testemony) => {
      if (testemony === null) {
        res.status(404).json({});
        return;
      }
      res.status(204).send();
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ error: "Incorrect id" });
      } else {
        next(err);
      }
    });
});

module.exports = { url: "/testemony", router };
