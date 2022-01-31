const AuthorsController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.post("/api/authors", AuthorsController.createAuthor);
  app.get("/api/authors", AuthorsController.getAllAuthors);
  app.get("/api/author/:id", AuthorsController.getAuthor);
  app.put("/api/author/:id", AuthorsController.updateAuthor);
  app.delete("/api/author/:id", AuthorsController.deleteAuthor);
};
