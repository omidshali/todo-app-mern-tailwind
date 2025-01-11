const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  todoValidate() {
    return [check("title").not().isEmpty().withMessage("title cant be empty")];
  }
})();
