const express = require('express');
const router = express.Router();
const Tape = require('../models/tapes.js');

const tapes =   [
    {
      artist: 'Many',
      title: 'Goodfellas OST',
      year: '1990',
      coverImg: 'https://imgur.com/qTUA2fg.png',
      cassetteImg: 'https://imgur.com/xeLYhQE.png'
    },
    {
      artist: 'Teenage Fanclub',
      title: 'Bandwagonesque',
      year: '1991',
      coverImg: 'https://imgur.com/NlB1FFR.png',
      cassetteImg: 'https://imgur.com/tHJ4Y4N.png'
    },
    {
      artist: 'A Tribe Called Quest',
      title: 'The Low End Theory',
      year: '1991',
      coverImg: 'https://imgur.com/6ECoyqE.png',
      cassetteImg: 'https://imgur.com/k4PQSdA.png'
    },
    {
      artist: 'Lemonheads',
      title: 'It/s A Shame About Ray',
      year: '1992',
      coverImg: 'https://imgur.com/bjAFfic.png',
      cassetteImg: 'https://imgur.com/nNcqe91.png'
    },
    {
      artist: 'Sade',
      title: 'Promise',
      year: '1985',
      coverImg: 'https://imgur.com/OURM0py.png',
      cassetteImg: 'https://imgur.com/uqeP5yw.png'
    },
    {
      artist: 'Geto Boys',
      title: 'We Can/t Be Stopped',
      year: '1991',
      coverImg: 'https://imgur.com/deRzldS.png',
      cassetteImg: 'https://imgur.com/rg1laGP.png'
    },
    {
      artist: 'Oasis',
      title: '(What/s The Story) Morning Glory?',
      year: '1995',
      coverImg: 'https://imgur.com/kR3BQxs.png',
      cassetteImg: 'https://imgur.com/yvMSzt3.png'
    },
    {
      artist: 'Lord Tariq & Peter Gunz',
      title: 'Deja Vu(Uptown Baby)',
      year: '1997',
      coverImg: 'https://imgur.com/jowNzy4.png',
      cassetteImg: 'https://imgur.com/xZdkxba.png'
    },
    {
      artist: 'Billy Joel',
      title: 'Turnstiles',
      year: '1976',
      coverImg: 'https://imgur.com/188w3bV.png',
      cassetteImg: 'https://imgur.com/CahA8Nw.png'
    },
    {
      artist: 'Twin Sister',
      title: 'Alternates',
      year: '2010',
      coverImg: 'https://imgur.com/ilEUCw6.png',
      cassetteImg: 'https://imgur.com/wq0h1xe.png'
    },
    {
      artist: 'Big Daddy Kane',
      title: 'Long Live The Kane',
      year: '1988',
      coverImg: 'https://imgur.com/xCBdFOd.png',
      cassetteImg: 'https://imgur.com/DCaPuto.png'
    },
    {
      artist: 'Big Star',
      title: 'Radio City',
      year: '1974',
      coverImg: 'https://imgur.com/GDkJvD1.png',
      cassetteImg: 'https://imgur.com/yQDiKLP.png'
    },
    {
      artist: 'The Delfonics',
      title: 'The Best Of The Delfonics',
      year: '1984',
      coverImg: 'https://imgur.com/u2X8Oui.png',
      cassetteImg: 'https://imgur.com/XVpmCiW.png'
    },
    {
      artist: 'Tom Petty & The Heartbreakers',
      title: 'Self Titled',
      year: '1978',
      coverImg: 'https://imgur.com/2ISDl0y.png',
      cassetteImg: 'https://imgur.com/zt8nNwO.png'
    },
    {
      artist: 'Terminator X',
      title: '& The Valley Of The Jeep Beats',
      year: '1991',
      coverImg: 'https://imgur.com/TLLIJNH.png',
      cassetteImg: 'https://imgur.com/udgLvci.png'
    },
    {
      artist: 'Hole',
      title: 'Celebrity Skin',
      year: '1998',
      coverImg: 'https://imgur.com/vJxbsX4.png',
      cassetteImg: 'https://imgur.com/45zflTQ.png'
    },
  ]

//UPDATE
router.put('/:id', (req, res) => {
  Tape.findByIdAndUpdate(req.params.id, req.body, { new:true }, (error, updatedModel) => {
   res.redirect('/');
  })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  Tape.findById(req.params.id, (error, foundTape) => {
    res.render(
      'edit.ejs',
      {
        tape: foundTape
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
         tapes: allTapes
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
router.post('/', (req, res) => {
  Tape.create(req.body, (error, createdTape) => {
    res.redirect('/');
  })
});

//SHOW
router.get('/:id', (req, res) => {

  Tape.findById(req.params.id, (error, foundTape) => {
    console.log(foundTape);
    res.render(
      'show.ejs',
       {
        tape: foundTape
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

router.get('/db/seed', (req, res) => {
  Tape.create(tapes, (error, createdTapes) => {
    res.redirect('/');
   }
  )}
)

module.exports = router;
