const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log("Started server at port - 3000....");
});
