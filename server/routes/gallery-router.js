const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT route to add likes
router.put('/like/:id', (req, res) => {
  const id = req.params.id;

  const queryText = `
    UPDATE "photo-gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;
	`;

  pool
    .query(queryText, [id])
    .then(res.sendStatus(200))
    .catch((err) => {
      console.log(`error in PUT with ${queryText}`, err);
      res.sendStatus(500);
    });
});

// GET route for photo gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "photo-gallery" ORDER BY "id";`;

  pool
    .query(queryText)
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log(`error in GET with ${queryText}`, err);
      res.sendStatus(500);
    });
});

// POST route to add new photo
router.post('/', (req, res) => {
  console.log(req.body);
  const queryText = `
    INSERT INTO "photo-gallery" ("path", "description")
    VALUES ($1, $2);
  `;

  pool
    .query(queryText, [req.body.path, req.body.description])
    .then(res.sendStatus(201))
    .catch((err) => console.log(`error in POST with ${queryText}`, err));
});

module.exports = router;
