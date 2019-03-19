const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
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

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    
    const newFeedback = req.body;
    const queryText = `WITH "feedback" AS (
	INSERT INTO "feedback" ("score", "helpful", "comments")
	VALUES ($1, $2, $3)
	)
INSERT INTO "join" ("user_id")
VALUES ($4)
;`
    const queryValues = [
        newFeedback.selectedValue,
        newFeedback.selectedValue2,
        newFeedback.selectedValue3,
        newFeedback.user,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('Error completing POST query', error);
            res.sendStatus(500);
        });
});
module.exports = router;