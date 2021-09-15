import Mock from 'mockjs'

Mock.mock('./api/map', 'get', {
    status: 200,
    message: '获取商品信息成功',
    "data|50": [{id:"121t4",
                title:"@csentence(3, 5)",
                author:"@cname",
                "map|1": ["阿努比斯神庙",'花村','沃斯卡娅工业区'],
                "type|1":["点图","球图"],
                difficulty:"@natural(0, 5)",
                info:"@cparagraph",
                like:false,
                Collect:false,
                date:"@date('yyyy-MM-dd)",
                tags:["新图","推荐"]}]
})