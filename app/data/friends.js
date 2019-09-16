// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  },
  {
    userName:"Ahmed",
    userPhoto:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    question1:4,
    question2:2,
    question3:4,
    question4:5,
    question6:3,
    question7:2,
    question8:3,
    question9:4,
    question10:2,
  }
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
