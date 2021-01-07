const express = require('express');
const router = express.Router();
const Tape = require('../models/tapes.js');

const tapes =   [
    {
      artist: 'Many',
      title: 'Goodfellas OST',
      year: '1990',
      coverImg: 'https://imgur.com/qTUA2fg',
      cassetteImg: 'https://imgur.com/xeLYhQE'
    },
    {
      artist: 'Teenage Fanclub',
      title: 'Bandwagonesque',
      year: '1991',
      coverImg: './public/imgs/IMG_4176.HEIC',
      cassetteImg: './public/imgs/IMG_4177.HEIC'
    },
    {
      artist: 'A Tribe Called Quest',
      title: 'The Low End Theory',
      year: '1991',
      coverImg: 'https://imgur.com/6ECoyqE',
      cassetteImg: 'https://imgur.com/k4PQSdA'
    },
    {
      artist: 'Lemonheads',
      title: 'It/s A Shame About Ray',
      year: '1992',
      coverImg: 'https://imgur.com/bjAFfic',
      cassetteImg: 'https://imgur.com/nNcqe91'
    },
    {
      artist: 'Sade',
      title: 'Promise',
      year: '1985',
      coverImg: 'https://imgur.com/OURM0py',
      cassetteImg: 'https://imgur.com/uqeP5yw'
    },
    {
      artist: 'Geto Boys',
      title: 'We Can/t Be Stopped',
      year: '1991',
      coverImg: 'https://imgur.com/deRzldS',
      cassetteImg: 'https://imgur.com/rg1laGP'
    },
    {
      artist: 'Oasis',
      title: '(What/s The Story) Morning Glory?',
      year: '1995',
      coverImg: 'https://imgur.com/kR3BQxs',
      cassetteImg: 'https://imgur.com/yvMSzt3'
    },
    {
      artist: 'Lord Tariq & Peter Gunz',
      title: 'Deja Vu(Uptown Baby)',
      year: '1997',
      coverImg: 'https://imgur.com/jowNzy4',
      cassetteImg: 'https://imgur.com/xZdkxba'
    },
    {
      artist: 'Billy Joel',
      title: 'Turnstiles',
      year: '1976',
      coverImg: 'https://imgur.com/188w3bV',
      cassetteImg: 'https://imgur.com/CahA8Nw'
    },
    {
      artist: 'Twin Sister',
      title: 'Alternates',
      year: '2010',
      coverImg: 'https://imgur.com/ilEUCw6',
      cassetteImg: 'https://imgur.com/wq0h1xe'
    },
    {
      artist: 'Big Daddy Kane',
      title: 'Long Live The Kane',
      year: '1988',
      coverImg: 'https://imgur.com/xCBdFOd',
      cassetteImg: 'https://imgur.com/DCaPuto'
    },
    {
      artist: 'Big Star',
      title: 'Radio City',
      year: '1974',
      coverImg: 'https://imgur.com/GDkJvD1',
      cassetteImg: 'https://imgur.com/yQDiKLP'
    },
    {
      artist: 'The Delfonics',
      title: 'The Best Of The Delfonics',
      year: '1984',
      coverImg: 'https://imgur.com/u2X8Oui',
      cassetteImg: 'https://imgur.com/XVpmCiW'
    },
    {
      artist: 'Tom Petty & The Heartbreakers',
      title: 'Self Titled',
      year: '1978',
      coverImg: 'https://imgur.com/2ISDl0y',
      cassetteImg: 'https://imgur.com/zt8nNwO'
    },
    {
      artist: 'Terminator X',
      title: '& The Valley Of The Jeep Beats',
      year: '1991',
      coverImg: 'https://imgur.com/TLLIJNH',
      cassetteImg: 'https://imgur.com/udgLvci'
    },
    {
      artist: 'Hole',
      title: 'Celebrity Skin',
      year: '1998',
      coverImg: 'https://imgur.com/vJxbsX4',
      cassetteImg: 'https://imgur.com/45zflTQ'
    },
  ]

//UPDATE
router.put('/:id', (req, res) => {
  Tape.findByIdAndUpdate(req.params.id, req.body, { new:true }, (error, updatedModel) => {
   res.redirect('/tapes');
  })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'edit.ejs',
      {
        tape: tapes
      }
    )
  })
})

//INDEX
router.get('/', (req, res) => {
  Tape.find({}, (error, allTapes) => {
  res.render(
      'index.ejs',
       {
         tapes: tapes
       }
    )
  })
})

//NEW
router.get('/new', (req, res) => {
  res.render('new.ejs',
  {
    tape: tapes
  }
);
});

//CREATE
router.post('/new', (req, res) => {
  Tape.create(req.body, (error, createdTape) => {
    res.redirect('/');
  })
});

//SHOW
router.get('/:id', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'show.ejs',
       {
        tape: tapes[req.params.id]
       }
    )
  })
});

//DELETE
router.delete('/:id', (req, res) => {
  Tape.findByIdAndRemove(req.params.id, (error, deletedTape) => {
    res.redirect('/');
  })
})

module.exports = router;
