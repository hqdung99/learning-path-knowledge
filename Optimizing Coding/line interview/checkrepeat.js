const arr = ["apple", "micro", "amazon", "apple", "tc", "bitcoin"];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

for (let prop in obj) {
  if (obj[prop] > 1) {
    console.log(prop);
  }
}
