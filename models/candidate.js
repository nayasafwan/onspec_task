module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('candidates', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableCallStartTime: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      availableCallEndTime: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      github: {
        type: Sequelize.STRING,
        allowNull: true
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('candidates');
  },
} 
