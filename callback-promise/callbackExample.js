const simulatedFun = require("./helpersWithCallback");

const { allStudents, allCourses, studentDetail, getEmoji } = simulatedFun;

const printEmoji = emoji => {
  console.log(emoji);
};

const averageScore = detail => {
  var total = 0,
    count = 0;

  for (let [key, value] of Object.entries(detail.courses)) {
    total = total + value;
    count++;
  }
  console.log(total);
  console.log("The average score is :" + total / count);
};

const printCourses = courses => {
  console.log("--------all courses--------");
  courses.map(course => {
    console.log(course);
  });
  console.log("---------------------------");
};

const printStudents = names => {
  console.log("--------all students--------");
  names.map(name => {
    console.log(name);
    if (name === "jack") {
      getEmoji(name, printEmoji);
      studentDetail(name, averageScore);
    }
  });
};

const getAllStudents = () => {
  allStudents(printStudents);
  allCourses(printCourses);
};

getAllStudents();
