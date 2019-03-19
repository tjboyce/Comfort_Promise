const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
  const queryText = (`SELECT "username", "score", "helpful", "comments", "feedback"."id" AS "feedback_id" FROM "user" 
        JOIN "join" ON "user"."id" = "join"."user_id"
        JOIN "feedback" ON "feedback"."id" = "join"."feedback_id";`)
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log('feedback get:', result.rows);
    }).catch((error) => {
        console.log('GET request error');
        res.sendStatus(500);
    })
});
module.exports = router;