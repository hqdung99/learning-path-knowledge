

const arr = [
  "animals/animal/bird",
  "animals/animal/elephant",
  "animals/animal",
  "plants/banana",
  "plants/apple",
  "animals/animal/bird",
  "animals/animal/elephant",
  "animals/animal",
  "plants/banana",
  "plants/apple",
  "class/classroom/students/A",
  "class/classroom/students/A",
  "class/classroom/students/B",
];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  const listName = item.split("/");

  let refer = obj;
  for (let k = 0; k < listName.length - 1; k++) {
    if (!refer[listName[k]]) {
      refer[listName[k]] = {};
    }
    refer = refer[listName[k]];
  }

  if (
    refer[listName[listName.length - 1]] &&
    typeof refer[listName[listName.length - 1]] === "number"
  ) {
    refer[listName[listName.length - 1]] += 1;
  }
  if (!refer[listName[listName.length - 1]]) {
    refer[listName[listName.length - 1]] = 1;
  }
}

console.log(obj);


{
  "animal": {
    "mammal": {
      "dog": false,
      "cat": {
        "tiger": false,
        "lion": false
      },
      "elephant": false
    },
    "reptile": false
  },
  "plant": {
    "sunflower": false
  }
}