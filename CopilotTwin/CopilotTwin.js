const CopilotTwin = {
  age: 40,

  name: {
    first: "Michael",
    middle: "Junior",
    last: "Williams",
  },

  college: "University Of Bridgeport",

  collegeGrades: [
    "A-",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B+",
    "B+",
    "B",
    "A",
    "B-",
    "B",
    "B",
    "B-",
    "B",
    "A",
    "B",
    "W",
    "B",
    "B-",
    "W",
    "C-",
    "F",
    "C",
    "W",
    "F",
    "W",
    "W",
    "W",
    "F",
    "W",
    "D-",
    "F",
    "F",
    "D-",
    "D",
    "F",
    "D-",
    "W",
    "W",
    "A",
    "D+",
    "C",
    "F",
    "D-",
    "W",
    "A-",
    "C+",
    "F",
    "B-",
    "F",
    "F",
    "F",
    "B+",
    "F",
    "F",
    "F",
    "D-",
    "C+",
    "C",
    "B-",
    "B",
    "D+",
    "A",
    "A-",
    "B",
  ],

  filterGrades: function (GRADE) {
    return this.collegeGrades.filter((Grade) => Grade === GRADE);
  },

  graduationYear: 2009,

  webDevelopment: ["HTML", "CSS", "JavaScript"],

  automobiles: [
    "GEO Tracker",
    "Chrysler Sebring Convertible",
    "Cadillac Seville",
    "Chevrolet Monte Carlo",
    "Cadillac Eldorado",
    "Toyota Camry Hybrid",
    "2015 Ford Escape",
    "2003 Volvo V40",
    "2007 Mercedes Benz E350",
  ],
};
