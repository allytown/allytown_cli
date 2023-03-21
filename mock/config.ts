import { ApiEnum } from '../src/enum/ApiEnum'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/' + ApiEnum.BASE_CONFIG,
    method: 'get',
    response: () => {
      return {
        base: {
          name: 'allytown',
        },
        copyright: {
          ad: '柳暗花明又一村',
          weixin: 'allytown',
          email: '2890165517@qq.com',
          icp: '秦ICP备99999999-8',
          showXjAvatar: false,
          other: 'Copyright © allytown All Rights Reserved',
        },
      }
    },
  },
] as MockMethod[]
