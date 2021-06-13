var myPromise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("fail");
  }, 5000);
});

myPromise3
  .then(function (value) {
    console.log("success: ", value);
  })
  .catch((err) => {
    console.log("fail: ", err);
  });
