import express from "express";
import UserModel from "../models/user_model.js";

const router = express.Router();

router.get("/", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/:name", (req, res) => {
  UserModel.findOne({ name: req.params.name }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  const data = new UserModel();
  data.name = req.body.name;
  data.age = req.body.age;
  data.address = req.body.address;
  data.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Data saved successfully");
    }
  });
});

router.put("/:name", (req, res) => {
  UserModel.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Data updated successfully");
      }
    }
  );
});

export default router;
