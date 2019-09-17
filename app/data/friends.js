// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userArray = [
  {
    userName:"Sawyer",
    userPhoto:"https://i.pinimg.com/600x315/04/28/3e/04283e1a751ead27a75b13895119d6bc.jpg",
    questions:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  
  {
    userName:"Tom",
    userPhoto:"https://www.hindisoch.com/wp-content/uploads/2016/11/Funny-Pictures-Girlfriend-Wanted.jpg",
    questions:[
      5,
      4,
      4,
      3,
      5,
      5,
      1,
      2,
      4,
      2
    ]
  },
  {
    userName:"Taylor",
    userPhoto:"https://media1.popsugar-assets.com/files/thumbor/exm6YM2WCm6az6Qac3GlxOth-ks/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/18/961/n/1922283/13a505305d30ecd8789188.96993200_/i/Funny-Memes-Tweets-About-Cats-Trailer.jpg",
    questions:[
        1,
        2,
        4,
        3,
        2,
        1,
        2,
        5,
        4,
        1
      ]
  },
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;
