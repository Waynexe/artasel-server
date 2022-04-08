const db = require("../models");
const Form = db.forms;
const Op = db.Sequelize.Op;
// Create and Save a new Form
exports.create = (req, res) => {
  // Validate request
  if (!req.body.civility) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Form
  const form = {
    civility: req.body.civility,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    postal: req.body.postal,
    city: req.body.city,
    country: req.body.country,
    job: req.body.job,
    message: req.body.message,
  };
  // Save Form in the database
  Form.create(form)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Form."
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const civility = req.query.civility;
    var condition = civility ? { civility: { [Op.like]: `%${civility}%` } } : null;
    Form.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving forms."
        });
      });
};
// Find a single Form with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Form.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Form with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Form with id=" + id
        });
      });
};
// Update a Form by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Form.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Form was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Form with id=${id}. Maybe Form was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Form with id=" + id
        });
      });
};
// Delete a Form with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Form.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Form was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Form with id=${id}. Maybe Form was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Form with id=" + id
        });
      });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Form.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all forms."
          });
        });
};
// Find all published Tutorials
/* exports.findAllPublished = (req, res) => {
    Form.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving forms."
      });
    });
}; */