const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(result.rows);
    queryText = (`SELECT * FROM "ageGroup" WHERE "id" = '1';`)
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log('GET request error');
        res.sendStatus(500);
    })  
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;