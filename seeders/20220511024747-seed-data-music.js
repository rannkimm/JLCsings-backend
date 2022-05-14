'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'musics',
      [
        {
          user_id: 12,
          title: '왕이신 나의 하나님',
          category: ['입례송', '느린송', '기도송', '축도송'],
          video: 'https://www.youtube.com/embed/CaIKkfEhEOY',
          description: '원래 F-key 찬양입니다. G-key 와 A-key 악보도 있습니다!'
        },
        {
          user_id: 13,
          title: '내 손을 주께 높이 듭니다',
          category: ['입례송', '느린송', '기도송'],
          video: 'https://www.youtube.com/embed/-hatwOlbYTM',
          description: '원래 G-key 찬양입니다. F-key 와 A-key 악보도 있습니다!'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('musics', null, {})
  }
};
