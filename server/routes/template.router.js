const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = (`SELECT * FROM "ageGroup"`)
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log('marcus', result.rows);
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