'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StartingDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ApplicationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Delivery: {
      type: DataTypes.DATE,
    },
    FundingOptions: {
      type: DataTypes.ENUM('No Funds', 'Expenses', 'Photographer'),
      allowNull: false
    },
    FundsAvailable: {
      type: DataTypes.STRING,
    },
    FundsDetails: {
      type: DataTypes.STRING,
    },
    FundsFairshot: {
      type: DataTypes.BOOLEAN,
    },
    PhotographersNeeded: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProfessionalOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    GeographicRestriction: {
      type: DataTypes.ENUM('Anywhere', 'Continent', 'Country', 'Region'),
    },
    Question1: {
      type: DataTypes.STRING,
    },
    Question2: {
      type: DataTypes.STRING,
    },
    Question3: {
      type: DataTypes.STRING,
    },

  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};