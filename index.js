//OOP menggunakan Class

//regular function
function showName() {
  function showMyName() {}
}

//

const profileObject = {
  firstname: "Andi doang",
  lastName: "Nama Belakang andi",
  showMyName: function () {
    return this.firstname + this.lastName;
  },
};

//convert ke OOP

class Profile {
  constructor(firstname, lastName, gender) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.gender = gender;
  }

  showMyName() {
    return "My Name is: " + this.firstname + " " + this.lastName;
  }

  nameLowerCase() {
    const fullName = this.firstname + " " + this.lastName;
    return fullName.toLowerCase();
  }

  genderTranslateToIndonesia() {
    if (this.gender === "Male") {
      return "Laki-laki";
    } else if (this.gender === "Famale") {
      return "Perempuan";
    } else {
      return "Maaf Gender yang anda inputkan tidak ada dunia ini";
    }
  }
}

const profileOrbit = new Profile("Orbit", "Putra", "Male");
const profilePutri = new Profile("Putri", "Andini", "Famale");

console.log(profileOrbit.showMyName());
console.log(profilePutri.genderTranslateToIndonesia());

class Food {
  constructor() {
    this.ingridients = [];
  }

  addNewIngridents(ingridient) {
    this.ingridients.push(ingridient);
    return this;
  }
}

const martabakTelur = new Food();

martabakTelur
  .addNewIngridents("Egg")
  .addNewIngridents("Flour")
  .addNewIngridents("Beef")
  .addNewIngridents("Onion");

console.log(martabakTelur);

//inheritance

class User {
  constructor(email, password) {
    this.emailUser = email;
    this.password = password;
    this.isLogin = false;
    this.validUser = ["bramantyo@gmail.com", "dedi@gmail.com"];
  }

  login() {
    if (this.validUser.includes(this.emailUser)) {
      this.isLogin = true;
      return `This Email successfully login ${this.emailUser}`;
    } else {
      this.isLogin = false;
      return `This Email is not valid ${this.emailUser}`;
    }
  }

  logout() {
    this.isLogin = false;
    return `This Email successfully logout ${this.emailUser}`;
  }

  helloWorld() {
    return "Hello World";
  }
}

class Admin extends User {
  constructor(email) {
    super();
    this.emailAdmin = email;
  }

  deleteUser() {
    const newUsers = this.validUser.filter((user) => user !== this.emailAdmin);
    this.validUser = newUsers;
  }
}

const bramantyoLogin = new User("bramantyo@gmail.com", "123456");
const admin = new Admin("bramantyo@gmail.com");
admin.deleteUser();
bramantyoLogin.login();
console.log(admin.helloWorld());

console.log("ini propertis milik Admin class", admin);

//CALLBACK

function print(callback) {
  console.log("aku jalan");

  callback();
}

print(() => console.log("hello world"));

console.log("Ini adalah pertama");

setTimeout(function () {
  console.log("Ini adalah kedua");
}, 5000);

console.log("Ini adalah ketiga");

const cars = ["Lamborgini", "Posche", "BMW"];

cars.forEach(function (car) {
  document.write(car);
});

cars.forEach((car) => {
  document.write(car);
});

document.getElementById("hitme").addEventListener("click", () => {
  alert("HIT ME SUCCESS");
});

//HOF
// Map
// 1. Generate New Array withour mutate original array
// 2. Generate full size length form original array
// 3. Use map to make a new array with new element (Update)

const schools = ["SMK 1", "SMK 2", "SMA 19"];
const newSchools = schools.map((school, index) => {
  if (school === "SMA 19") {
    return;
  }

  return {
    no: index + 1,
    name: `${school} ${index === 1 ? "Tanggerang" : "Jakarta"}`,
  };
});
console.log("originial Array", schools);
console.log("new Array", newSchools);

//Filter
// 1. Return new array
// 2. Remove element if condition is false
// 3. Cannot update element

const filteredSchools = schools.filter((school) => {
  if (school === "SMK 2") {
    return false;
  }

  return true;
});

console.log(filteredSchools);

const scores = [1, 3, 6, 10, 2, 12];
const sumScores = scores.reduce((accumulator, currentValue) => {
  console.log("accumulator", accumulator);
  console.log("currentValue", currentValue);
  return accumulator + currentValue;
});

console.log(sumScores);

const orders = [
  {
    name: "Sepatu",
    price: 20000,
  },
  {
    name: "Baju",
    price: 15000,
  },
  {
    name: "Celana",
    price: 30000,
  },
];

const total = orders.reduce((acc, curr) => {
  console.log("acc", acc);
  return acc + curr.price;
}, 0);

console.log(total);

let temp = 0;
for (x = 0; x < scores.length; x++) {
  temp = temp * scores[x];
}

console.log(temp);
