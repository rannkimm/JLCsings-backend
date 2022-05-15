'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'musicsheets',
      [
        {
          music_id: 13,
          title: '왕이신 나의 하나님 - F',
          image: 'http://www.fellowshipusa.com/xe/note/files/attach/images/175798/157/177/912.jpg',
          key: 'F'
        },
        {
          music_id: 13,
          title: '왕이신 나의 하나님 - G',
          image: 'http://pds113.cafe.daum.net/image/8/cafe/2009/08/06/09/58/4a7a2ac17f75a',
          key: 'G'
        },
        {
          music_id: 14,
          title: '내 손을 주께 높이 듭니다 - G',
          image: 'https://t1.daumcdn.net/cfile/blog/12566C0C499268AA15',
          key: 'G'
        },
        {
          music_id: 14,
          title: '내 손을 주께 높이 듭니다 - A',
          image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTEyMTJfNzkg/MDAxNjM5Mjc4NDU4MzM0.Dhlq8P-e9vRKIklsKdKkMHv6nIUOXHwv-1tqXMPkXMkg.glRH4vj7o6eDJ7QaSDWy4cSlum2fxqakJRhG6bPnw1Yg.PNG.0909junseo/%25EB%2582%25B4_%25EC%2586%2590%25EC%259D%2584_%25EC%25A3%25BC%25EA%25BB%2598_%25EB%2586%2592%25EC%259D%25B4_%25EB%2593%25AD%25EB%258B%2588%25EB%258B%25A4_(A)-1.png?type=w800',
          key: 'A'
        },
        {
          music_id: 14,
          title: '내 손을 주께 높이 듭니다 - F',
          image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTEyMTJfMjgw/MDAxNjM5Mjc4NDU4MDYz.xiDDe167glAQKKtx28Z0frkt75ZmfYuAxZYLoBO-wDUg.XLT2Q4T3y8S3Dq9g6DRYwlid0kKLvQwGdymp9OpbgDgg.PNG.0909junseo/%25EB%2582%25B4_%25EC%2586%2590%25EC%259D%2584_%25EC%25A3%25BC%25EA%25BB%2598_%25EB%2586%2592%25EC%259D%25B4_%25EB%2593%25AD%25EB%258B%2588%25EB%258B%25A4_(F)-1.png?type=w800',
          key: 'F'
        },
        {
          music_id: 18,
          title: '당신은 하나님의 언약안에 - D',
          image: 'https://postfiles.pstatic.net/data41/2009/3/8/251/345_rawonjae.jpg?type=w3',
          key: 'D'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('musicsheets', null, {})
  }
};
