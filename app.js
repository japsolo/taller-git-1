console.log("El otro Javi. El de avatar negro");

function sayHello () {
  return "Hello world, how is it going?!";
}

console.log( sayHello() );

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

for (const month of months) {
  console.log(month);
}

const getTime = () => {
  const date = new Date();
  return date.toLocaleDateString();
}

const userName = env.USER_NAME;
const userLastName = env.USER_LAST_NAME;
const userToken = env.USER_TOKEN;