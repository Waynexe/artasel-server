module.exports = app => {
    const forms = require("../controllers/form.controller.js");
    var router = require("express").Router();
    // Create a new Form
    router.post("/", forms.create);
    // Retrieve all Forms
    router.get("/", forms.findAll);
    // Retrieve all published Forms
    //router.get("/published", forms.findAllPublished);
    // Retrieve a single Form with id
    router.get("/:id", forms.findOne);
    // Update a Form with id
    router.put("/:id", forms.update);
    // Delete a Form with id
    router.delete("/:id", forms.delete);
    // Delete all Forms
    router.delete("/", forms.deleteAll);
    app.use('/api/forms', router);
  };