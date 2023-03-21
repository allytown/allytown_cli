import { ApiEnum } from './../src/enum/ApiEnum'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/' + ApiEnum.CURRENT_USER,
    method: 'get',
    response: () => {
      return {
        id: 1,
        name: 'allytown',
        email: '2890165517@qq.com',
        sex: 1,
        avatar: '/images/avatar.jpg',
        home: 'http://www.houdunren.com',
        weibo: null,
        wechat: 'allytown123',
        github: 'http://github.com/allytown',
        qq: '',
        created_at: '2020-01-29T20:50:56.000000Z',
        updated_at: '2023-01-23T15:19:54.000000Z',
      }
    },
  },
] as MockMethod[]
