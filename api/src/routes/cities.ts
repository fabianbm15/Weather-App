import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {});

router.get("/search/:name", (req, res) => {});

router.get("/search/:id", (req, res) => {});

export default router;
