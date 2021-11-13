'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', 
    
    [ 
      {
        name: 'John Doe',
        telefone: '200229420',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vitor hugo',
        telefone: '51515161',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pedro jamelao',
        telefone: '200229420',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'luiz da 38',
        telefone: '15151562661',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'paulao',
        telefone: '42424242',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'vicentin raio laser',
        telefone: '61616161',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'locatin',
        telefone: '3636364364',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vicentili 40',
        telefone: '616437643543',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mira laser',
        telefone: '51515151',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soldado ryan',
        telefone: '6161616161',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tommy finger',
        telefone: '383838383',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'José capa preta',
        telefone: '20329392842',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fernando da vibe',
        telefone: '3293929292',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
