// solution = (str) => {
//    let ind = [];
//    let a = str.split('');
//    a.forEach((item, index) => (item == item.toUpperCase()) ? ind.push(index) : item);
//    ind.reduce((current, item) => {
//       return a.splice((current + item), 0, "_");
//    }, 0);
//    return a.join('').toLowerCase();
// };

const solution = (str) => str
   .split('')
   .map(item => (item == item.toUpperCase()) ? '_' + item.toLowerCase() : item)
   .join('');

console.log(solution("redevCourses")); //-> "redev_courses"
console.log(solution("redevCoursesApp"));