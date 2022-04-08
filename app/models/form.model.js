module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("form", {
      civility: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      postal: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
    });
    return Form;
  };