/** list of example student names */
const students = ["bob", "jack", "rob", "tina", "emily"];

/** list of courses names students can take */
const courses = ["math", "physics", "statics", "history"];

/** list of emjois for students */
const emojis = {
  bob: "😌",
  jack: "🧓",
  rob: "👨",
  tina: "🧕",
  emily: "👩‍🎓"
};

/** list of student details */
const studentDetails = {
  bob: {
    age: 15,
    courses: {
      math: 78,
      physics: 99,
      statics: 98
    },
    city: "chicago"
  },
  jack: {
    age: 16,
    courses: {
      math: 88,
      physics: 79
    },
    city: "baltimore"
  },
  rob: {
    age: 16,
    courses: {
      math: 84,
      physics: 76,
      statics: 68,
      history: 100
    },
    city: "boston"
  },
  rob: {
    age: 16,
    courses: {
      physics: 66,
      statics: 69,
      history: 88
    },
    city: "newyork"
  }
};

module.exports = {
  students,
  courses,
  studentDetails,
  emojis
};
