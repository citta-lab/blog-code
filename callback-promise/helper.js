const data = require("./dataHelper");

/** destructing from data */
const { students, courses, studentDetails, emojis } = data;

/** simulating getting list of students taking 1 second */
const allStudents = () => {
  setTimeout(() => {
    return students;
  }, 1000);
};

/** simulating getting list of all courses taking 1.5 seconds */
const allCourses = () => {
  setTimeout(() => {
    return courses;
  }, 1500);
};

/** simulating getting student details taking 3 seconds */
const studentDetail = name => {
  setTimeout(() => {
    return studentDetails[name];
  }, 3000);
};

/** simulating getting student emojis taking 2.5 seconds */
const getEmoji = name => {
  setTimeout(() => {
    return emojis[name];
  }, 2500);
};

module.exports = {
  allStudents,
  allCourses,
  studentDetail,
  getEmoji
};
