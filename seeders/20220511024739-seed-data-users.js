'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Ran',
          lastName: 'Kim',
          username: 'rankim',
          email: 'ran@fakeemail.com',
          passwordDigest: '123123123'
        },
        {
          firstName: 'Paul',
          lastName: 'Jee',
          username: 'pauljee',
          email: 'paul@fakeemail.com',
          passwordDigest: '123123123'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
