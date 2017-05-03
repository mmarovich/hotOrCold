const {FewestGuesses} = require('./models');

module.exports = function(app) {
    
    app.get('/fewest-guesses', (req, res, next) => {
        FewestGuesses
        .find()
        .exec((err, data) => {
            if(err) {
				return res.status(400).send(err);
			}
			if (!data) {
				return res.status(400).send();
			} else {
                res.json(data[0]);
            }
        })
    })

    app.post('/fewest-guesses', (req, res, next) => {
        console.log("This is supposed to be not empty: ", req.body)
        const guess = {
            fewestGuesses: req.body.fewestGuesses
        }
        FewestGuesses
        .create(guess, (err, guess) => {
            console.log("post guess: ", guess);
            res.status(201).send(guess);
        })
        // .then(_ => res.sendStatus(201))
        // .catch(e => res.status(400).send(e))
    })
}