const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return search results
router.get('/:query', (req, res) => {
    const query = req.params.query;
    console.log('in router get, query:', query)
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=10`)
    .then(response => {
        // console.log(response.data)
        res.send(response.data)}
    ).catch(err => {
        console.error('Search Results GET', err);
        res.sendStatus(500);
    })}
  ) 

  module.exports = router;