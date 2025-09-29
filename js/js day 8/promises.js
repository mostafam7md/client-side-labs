//2
const task = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task completed!");
  }, 2000);
});

task.then((message) => console.log(message));
