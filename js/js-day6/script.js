const employees = [
  {
    name: "Amr Essam",
    position: "Accountant",
    office: "Egypt",
    age: 33,
    startDate: "2008/11/28",
  },
  {
    name: "Mostafa Mohamed",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 30,
    startDate: "2009/10/09",
  },
  {
    name: "Ahmed Gamal",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
  },
  {
    name: "Hassan Mohamed",
    position: "Software Engineer",
    office: "London",
    age: 41,
    startDate: "2012/10/13",
  },
  {
    name: "Omar Mohamed",
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2011/06/07",
  },
  {
    name: "Yassine Ismail",
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
  },
  {
    name: "Hazem Mostafa",
    position: "Software Engineer",
    office: "London",
    age: 38,
    startDate: "2011/05/03",
  },
  {
    name: "Beshoy Potros",
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2011/12/12",
  },
  {
    name: "Mohamed Eid",
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    startDate: "2011/12/06",
  },
  {
    name: "Mohamed Mahmoud",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
  },
];

const tbody = document.querySelector("#employeeTable tbody");

function generateTable(data) {
  tbody.innerHTML = "";
  data.forEach((emp) => {
    const row = `
          <tr>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
            <td>${emp.office}</td>
            <td>${emp.age}</td>
            <td>${emp.startDate}</td>
          </tr>
        `;
    tbody.innerHTML += row;
  });
}

function sortTable(key, order) {
  let sortedEmployees = [...employees];
  if (key === "age") {
    if (order === "asc") {
      sortedEmployees.sort(function (a, b) {
        return a.age - b.age;
      });
    } else {
      sortedEmployees.sort(function (a, b) {
        return b.age - a.age;
      });
    }
  } else if (key === "startDate") {
    if (order === "asc") {
      sortedEmployees.sort(function (a, b) {
        return new Date(a.startDate) - new Date(b.startDate);
      });
    } else {
      sortedEmployees.sort(function (a, b) {
        return new Date(b.startDate) - new Date(a.startDate);
      });
    }
  } else {
    if (order === "asc") {
      sortedEmployees.sort(function (a, b) {
        return a[key].localeCompare(b[key]);
      });
    } else {
      sortedEmployees.sort(function (a, b) {
        return b[key].localeCompare(a[key]);
      });
    }
  }

  generateTable(sortedEmployees);
}

const form = document.getElementById("employeeForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newEmployee = {
    name: form.name.value,
    position: form.position.value,
    office: form.office.value,
    age: parseInt(form.age.value),
    startDate: form.startDate.value,
  };
  employees.push(newEmployee);
  generateTable(employees);
  form.reset();
});
generateTable(employees);

// linked list
function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.append = function (value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.length++;
};

LinkedList.prototype.delete = function (value) {
  if (!this.head) return;

  if (this.head.value === value) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  let current = this.head;
  while (current.next && current.next.value !== value) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
    this.length--;
  }
};

LinkedList.prototype.print = function () {
  let current = this.head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join("==>"));
};

const list = LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print();
list.delete(20);
list.print();

// task 3

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHI = function () {
  console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(`${this.name} is studying for grade ${this.grade}.`);
};

const person1 = new Person("Alice", 40);

person1.sayHI();

const student1 = new Student("Bob", 20, "A");

student1.sayHI();

student1.study();
