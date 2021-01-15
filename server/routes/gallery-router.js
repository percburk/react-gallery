const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', (req, res) => {
  const galleryId = req.params.id;
  console.log(galleryId);

  const queryText = `
    UPDATE "photo-gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;
	`;

  pool
    .query(queryText, [galleryId])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Error in ${queryText}`, err);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "photo-gallery" ORDER BY "id";`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(`Error in ${queryText}`, err);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
