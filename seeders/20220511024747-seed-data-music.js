'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'musics',
      [
        {
          user_id: 1,
          title: '왕이신 나의 하나님',
          category: ['입례송', '느린송', '기도송', '축도송'],
          video: 'https://www.youtube.com/watch?v=CaIKkfEhEOY&ab_channel=%ED%94%84%EB%A6%AC%EC%A6%98%EC%97%90%ED%94%BC%EC%86%8C%EB%93%9C',
          description: '원래 F-key 찬양입니다. G-key 와 A-key 악보도 있습니다!'
        },
        {
          user_id: 2,
          title: '내 손을 주께 높이 듭니다',
          category: ['입례송', '느린송', '기도송'],
          video: 'https://www.youtube.com/watch?v=-hatwOlbYTM&ab_channel=%EC%B9%98%EC%A7%80%EC%98%A4Cizio',
          description: '원래 G-key 찬양입니다. F-key 와 A-key 악보도 있습니다!'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('musics', null, {})
  }
};
