const express = require('express');
const router = express.Router();
const Tape = require('../models/tapes.js');

router.put('/:id', (req, res) => {
  Tape.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updateModel) => {
   res.redirect('/tapes');
  })
})

router.get('/:/edit', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'edit.ejs',
      {
        tape: foundTape
      }
    )
  })
})

router.get('/seed', (req, res) => {
  Tape.create(
    [
      {
        name: 'Goodfellas OST',
        year: '1990',
        coverImg: 'https://imgur.com/qTUA2fg',
        cassetteImg: 'https://imgur.com/xeLYhQE'
      }
    ],
    (error, data) => {
      res.redirect('/tapes')
    }
  )
});

router.get('/', (req, res) => {
  Tape.find({}, (error, allTapes) => {
    res.render(
      'index.ejs',
       {
         tapes: allTapes
       }
    )
  })
})

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.post('/', (req, res) => {
  Tape.create(req.body, (error, createdTape) => {
    res.redirect('/tapes');
  })
});

router.get('/:id', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'show.ejs',
      {
        tape: foundTape
      }
    )
  })
});

router.delete('/:id', (req, res) => {
  Tape.findByIdAndRemove(req.params,id, (error, data) => {
    res.redirect('/tapes');
  })
})

module.exports = router;
