const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return search results
router.get('/', (req, res) => {
    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=cats&limit=10`)
    .then(response => {
        res.send(response.data)}
    ).catch(err => {
        console.error('Search Results GET', err);
        res.sendStatus(500);
    })}
  ) 

  module.exports = router;