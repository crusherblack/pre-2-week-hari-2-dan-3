// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("3");

//1
//3
//2

// function requestAjax(callback) {
//   // inisialisasi library XML Http Request
//   var xhr = new XMLHttpRequest();
//   // set target request
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
//   // Implement callback
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       callback(xhr.responseText);
//     } else {
//       callback("Failed");
//     }
//   };

//   xhr.send();
// }

// function showResult(data) {
//   if (data != "Failed") {
//     //show Data
//     data = JSON.parse(data);
//     console.log(data.company.name);
//   } else {
//     console.log("gagal mendapatkan API Response");
//   }
// }

// requestAjax(showResult);

// function runTimer() {
//   setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//       console.log("2");
//       setTimeout(() => {
//         console.log("3");
//       }, 1000);
//     }, 3000);
//   }, 3000);
// }

// runTimer();

// const success = true;
// const isSuccess = new Promise(function (resolve, reject) {
//   if (success) {
//     resolve("2");
//   } else {
//     reject("Not Success");
//   }
// });

// console.log("1");
// isSuccess
//   .then(function (response) {
//     console.log(response);
//     return "hello";
//   })
//   .then(function (response) {
//     console.log(response);
//     console.log("3");
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("promise selesai");
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     const users = response;
//     const ulElement = document.getElementById("list-users");

//     const listUsers = users.map((user) => {
//       return `<li>${user.name}</li>`;
//     });

//     const stringList = listUsers.toString().replace(/,/g, " ");

//     console.log(stringList);

//     ulElement.innerHTML = stringList;
//   });

// const doFetch = (url) => fetch(url).then((result) => result.json());

// let urls = [
//   "https://jsonplaceholder.typicode.com/posts/10",
//   "https://jsonplaceholder.typicode.com/posts/8",
//   "https://jsonplaceholder.typicode.com/posts/9",
//   "https://jsonplaceholder.typicode.com/posts/7",
// ];

// let users = [];
// urls.map((url) => {
//   users.push(doFetch(url));
// });

// Promise.all(users).then((response) => console.log(response));

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     const ulElement = document.getElementById("list-users");

//     const listUsers = users.map((user) => {
//       return `<li>${user.name}</li>`;
//     });

//     const stringList = listUsers.toString().replace(/,/g, " ");

//     console.log(stringList);

//     ulElement.innerHTML = stringList;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const getContoh = async () => {
//   // async/await using ES6 arrow function
// };

// getUsers();

// const doFetch = async (url) => {
//   const response = await fetch(url);
//   return await response.json();
// };

// let urls = [
//   "https://jsonplaceholder.typicode.com/posts/10",
//   "https://jsonplaceholder.typicode.com/posts/8",
//   "https://jsonplaceholder.typicode.com/posts/9",
//   "https://jsonplaceholder.typicode.com/posts/7",
// ];

// let users = [];
// urls.map((url) => {
//   users.push(doFetch(url));
// });

// const promiseAll = async () => {
//   const response = await Promise.all(users);
//   console.log("adwadw", response);
// };

// promiseAll();

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

(async () => {
  // TODO: 1

  const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isOffline) {
          reject(new NetworkError("Gagal mendapatkan data dari internet"));
        } else {
          resolve({ name: "John", age: 18 });
        }
      }, 500);
    });
  };
  // TODO: 2

  try {
    const user = await fetchingUserFromInternet(false);
    console.log(user);
  } catch (error) {
    return error.message;
  }

  const helloWorld = (number) => {
    return new Promise((resolve) => resolve("hello world" + number));
  };

  const numbers = [1, 2, 3, 4];

  const kumpulanNumbers = numbers.map(async (number) => {
    return await helloWorld(number);
  });

  const tampung = await Promise.all(kumpulanNumbers);

  console.log(tampung);
})();

(() => console.log("hello World"))();
