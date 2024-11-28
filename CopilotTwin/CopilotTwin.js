const CopilotTwin = {
  age: 40,

  name: {
    first: "Michael",
    middle: "Junior",
    last: "Williams",
  },

  college: "University Of Bridgeport",

  collegeGrades: [
    { Course: "ENGL100", Title: "Basic Composition", Grade: "A-" },
    { Course: "CAIS191", Title: "Computer Concepts", Grade: "A" },
    { Course: "MARTS100D", Title: "Tae Kwon Do (Advanc", Grade: "A" },
    { Course: "MATH100", Title: "Elementary Algebra", Grade: "A" },
    { Course: "FYS101", Title: "First Year Seminar", Grade: "A" },

    { Course: "CHEM103", Title: "General Chemistry (1)", Grade: "B" },
    { Course: "CPSC101", Title: "Intro to Comp (1)", Grade: "B+" },
    { Course: "ENGL101", Title: "Comp & Rhet (1)", Grade: "B+" },
    { Course: "INTSTC101", Title: "Ethical Issues in c", Grade: "B" },
    { Course: "MATH109", Title: "Precalc Math", Grade: "A" },

    { Course: "ENGR111", Title: "Intro Engineering (1)", Grade: "B-" },
    { Course: "MATH110", Title: "Calc Analy Geom (1)", Grade: "B" },
    { Course: "CPEG210", Title: "Digital Design (1)", Grade: "B" },
    { Course: "CPSC102", Title: "Intro to Comp (2)", Grade: "B-" },
    { Course: "CPSC227", Title: "Discrete Structures", Grade: "B" },

    { Course: "MATH112", Title: "Calc Analy Geom (2)", Grade: "A" },
    { Course: "ENGL204", Title: "Technical Writing", Grade: "B" },
    { Course: "CPEG473", Title: "Local Area Network", Grade: "W" },
    { Course: "MEEG223", Title: "Mats Science Engr", Grade: "B" },
    { Course: "HUMC201B", Title: "Perspect Human Natu", Grade: "B-" },
    { Course: "PHYS111", Title: "Univ Physics (1)", Grade: "W" },

    { Course: "MATH215", Title: "Calc Analy Geom (3)", Grade: "C-" },
    { Course: "CPEG286", Title: "Intro to Microproce", Grade: "F" },
    { Course: "WREL103", Title: "Intro to Western Re", Grade: "C" },
    { Course: "ELEG235", Title: "Network Analy (1) Lab", Grade: "W" },
    { Course: "CPEG315", Title: "Digital Design (2) W", Grade: "F" },
    { Course: "ELEG233", Title: "Network Analysis (1)", Grade: "W" },

    { Course: "MATH301", Title: "Differential Equati", Grade: "W" },
    { Course: "CPEG387", Title: "Embedded System Des", Grade: "W" },
    { Course: "CPEG312", Title: "Computer Organizati", Grade: "F" },
    { Course: "MATH214", Title: "Linear Algebra", Grade: "W" },
    { Course: "ADSN118", Title: "Survey Art History", Grade: "D-" },

    { Course: "CAIS101", Title: "*Busn Statistics", Grade: "F" },
    { Course: "ECON201", Title: "Prins of Econ (1) -Mac", Grade: "F" },
    { Course: "PSYC103", Title: "Intro Psychology", Grade: "D-" },
    { Course: "PSYC201", Title: "Child Dev (1)", Grade: "D" },
    { Course: "GEOL205", Title: "Environmental Geolo", Grade: "F" },
    { Course: "SOC315", Title: "Criminology", Grade: "D-" },

    { Course: "ENGL330", Title: "19thC Am Lit::Hawth", Grade: "W" },
    { Course: "HIST231X", Title: "20thC Constitutiona", Grade: "W" },
    { Course: "GERO101", Title: "Intro Gero", Grade: "A" },
    { Course: "DNUTR205", Title: "Fund of Nutrition", Grade: "D+" },
    { Course: "PSYC304", Title: "Abnormal Psych", Grade: "C" },
    { Course: "WREL229", Title: "Confucianism", Grade: "F" },

    { Course: "ADSN117", Title: "Survey Art History", Grade: "D-" },
    { Course: "MCOM110", Title: "Public Communicatio", Grade: "W" },
    { Course: "HUSV110", Title: "Alchol/Drugs in Soc", Grade: "A-" },
    { Course: "HUSV201", Title: "Intro to Counseling", Grade: "C+" },
    { Course: "SCIC101", Title: "Our Environment :Ear", Grade: "F" },
    { Course: "GERO276", Title: "MH Work & Elderly", Grade: "B-" },

    { Course: "ADSN120", Title: "Intro Cptr Apps (2)", Grade: "F" },
    { Course: "CAPS390", Title: "*Senior Seminar", Grade: "F" },
    { Course: "FM108", Title: "*Prod Knowledge-Fas", Grade: "F" },
    { Course: "PHYS103", Title: "Basic Concepts (1)", Grade: "B+" },
    { Course: "RETL102", Title: "Merchandising Math", Grade: "F" },
    { Course: "SOSC203X", Title: "Intro Econ & Dev", Grade: "F" },

    { Course: "MUSC207", Title: "Hist of Jazz", Grade: "F" },
    { Course: "CAPS390", Title: "*Senior Seminar", Grade: "D-" },

    { Course: "CAIS101", Title: "Busn Statistics", Grade: "C+" },
    { Course: "CAPS390", Title: "Senior Seminar", Grade: "C" },
    { Course: "FM108", Title: "Prod Knowledge-Fash", Grade: "B-" },
    { Course: "HIST208", Title: "U.S. Hist Since 187", Grade: "B" },
    { Course: "MCOM211", Title: "Comm Thry", Grade: "D+" },
    { Course: "RETL102", Title: "Merchandising Math", Grade: "A" },

    { Course: "ENGL105A", Title: "Intro to Drama", Grade: "A-" },
    { Course: "HUMC201A", Title: "American Dream", Grade: "B" },
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
