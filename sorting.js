var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

  students.sort(function(a,b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA === nameB) {
      students.sort(function(c,d) {
        var ageC = c.age;
        var ageD = d.age;
        return ageC - ageD;
      });
    } else {
      return nameA > nameB
    }
  });

console.log(students);
