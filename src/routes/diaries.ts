import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("fetching all diaries");
});

router.post("/", (_req, res) => {
  res.send("saving a diary");
});

export default router;
