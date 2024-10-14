function processInput(user, callback) {
  callback(user);
}

const printName = (user) => {
  console.log("Welcome, " + user);
};

processInput("Mary", printName);

// The welcome should be displayed in the console
