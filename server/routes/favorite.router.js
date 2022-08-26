const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in router.get');
  const query = `SELECT "favorite".id, "favorite".url, "category".name FROM "favorite"
                LEFT JOIN "category"
                ON "category".id = "favorite".category_id
                GROUP BY "favorite".url, "favorite".id, "category".name
                ORDER BY "id";`;
  pool.query(query)
  .then(response => {
    console.log('what is ', response.rows);
    res.send(response.rows);
  }).catch(err => {
    console.error('Favorite GET', err)
    res.sendStatus(500)
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const url = req.body;
  const queryText = `INSERT INTO "favorite" ("url")
                    VALUES ($1);`;
  pool.query(queryText, [url])
    .then(response => {
      res.sendStatus(201);
    }).catch(err => {
      console.error('Favorite POST', err);
      res.sendStatus(500)
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const category = req.body.category_id
  const id = req.params.favId
  const queryText = `UPDATE "favorite"
                    SET "category_id" = $1
                    WHERE "id" = $2`
  const queryValues = [category, id]
  pool.query(queryText, queryValues)
    .then(response => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('Favorite PUT', err);
      res.sendStatus(500)
    })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
