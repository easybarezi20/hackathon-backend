const express = require("express");
const router = express.Router();
const { Meme, User } = require("../models");

require("../config/db.connection");

router.get("/", async (req, res, next) => {
    try {
      const meme = await Meme.find({});
      res.status(200).json(meme);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.get("/:id", async (req, res, next) => {
    try {
      const meme = await Meme.findById(req.params.id);
      res.status(200).json(meme);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.post("/", async (req, res, next) => {
    try {
      const createdMeme = await Meme.create(req.body);
      res.status(201).json(createdMeme);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.delete("/:id", async (req, res, next) => {
    try {
      const deletedMeme = await Meme.findByIdAndDelete(req.params.id);
      res.status(202).json(deletedMeme);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.put("/:id", async (req, res, next) => {
    try {
      const updatedMeme = await Meme.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json(updatedMeme)
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

module.exports = router;