const { DataTypes } = require('sequelize');

const up = async (query) => {
  await query.addColumn('apps', 'embed', {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  });
};

const down = async (query) => {
  await query.removeColumn('apps', 'embed');
};

module.exports = {
  up,
  down,
};
