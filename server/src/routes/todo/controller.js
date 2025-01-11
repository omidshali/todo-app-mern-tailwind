const controller = require("../controller");

module.exports = new (class extends controller {
  async todos(req, res) {
    const todos = await this.Todo.find({});
    this.response({ res, data: todos });
  }

  async addTodo(req, res) {
    const { title } = req.body;
    const todo = new this.Todo({
      title,
    });
    await todo.save();
    this.response({ res, message: "todo added", data: todo });
  }

  async deleteTodo(req, res) {
    const { id } = req.params;
    await this.Todo.findByIdAndDelete(id);
    this.response({ res, message: "todo deleted" });
  }

  async updateTodo(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const todo = await this.Todo.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    this.response({ res, message: "todo updated", data: { todo } });
  }
})();
