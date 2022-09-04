const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
    const id = req.params.id;
    const sql = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1
    `;
    pool.query(sql, [id])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("Error adding a like", error);
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
    const sql = `
    SELECT * FROM gallery ORDER BY description
    `;
    pool.query(sql)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Couldn't complete GET server`, error);
            res.sendStatus(500);
        });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
    const item = req.body;
    const sql = `
    INSERT INTO gallery (path, description)
    VALUES ($1, $2);
    `;
    pool.query(sql, [item.path, item.description])
        .then((result) => {
            console.log("Adding gallery item to database", result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log("Error adding gallery item", error);
            res.sendStatus(500);
        });
});

// DELETE Route
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const sql = `
    DELETE FROM gallery
    WHERE id = $1;
    `;
    pool.query(sql, [id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log("Error deleting specific gallery item", error);
            res.sendStatus(500);
        });
});

module.exports = router;
