const express = require('express');
const tapes = express.Router();
const Tape = require('../models/tapes.js');

//UPDATE
tapes.put('/:id', (req, res) => {
  Tape.findByIdAndUpdate(req.params.id, req.body, { new:true }, (error, updatedModel) => {
   res.redirect('/tapes');
  })
})

//EDIT
tapes.get('/:id/edit', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'edit.ejs',
      {
        tape: foundTape
      }
    )
  })
})

// SEED ROUTE
// tapes.get('/seed', (req, res) => {
//   Tape.create(
//     [
//       {
//         name: 'Goodfellas OST',
//         year: '1990',
//         coverImg: 'https://imgur.com/qTUA2fg',
//         cassetteImg: 'https://imgur.com/xeLYhQE'
//       }
//     ],
//     (error, data) => {
//       res.redirect('/tapes')
//     }
//   )
// });

//INDEX
tapes.get('/', (req, res) => {
  Tape.find({}, (error, allTapes) => {
  res.render(
      'index.ejs',
       {
         tapes: allTapes
       }
    )
  })
})

//NEW
tapes.get('/new', (req, res) => {
  res.render('new.ejs');
});

//CREATE
tapes.post('/', (req, res) => {
  Tape.create(req.body, (error, createdTape) => {
    res.redirect('/tapes');
  })
});

//SHOW
tapes.get('/:id', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'show.ejs',
      {
        tape: foundTape
      }
    )
  })
});

//DELETE
tapes.delete('/:id', (req, res) => {
  Tape.findByIdAndRemove(req.params,id, (error, deletedTape) => {
    res.redirect('/tapes');
  })
})

module.exports = tapes;
