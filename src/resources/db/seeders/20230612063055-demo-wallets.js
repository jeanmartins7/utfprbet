'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('wallets', [{
      id: "c8f40e41-2250-487b-b4a6-5c6d8ecb697a",
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "a060e91e-6cfa-4554-9c06-376c7e1e2a4e",
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "92c74205-438e-4d7f-8806-22f99f2164fa",
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "d902d541-a99e-49fb-b2e1-a9505c39d82d",
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "1909fc54-4b29-4906-9087-57f29fa77d58",
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('wallets', null, {});

  }
};
