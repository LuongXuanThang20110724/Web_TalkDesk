const staff = require("./staff");

function route(app) {
  app.use("/staff", staff);
}
module.exports = route;
