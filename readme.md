## 安装
### 安装node.js

```
$ curl -sL https://deb.nodesource.com/setup%5F10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### 安装MySQL

```
$ sudo apt update
$ sudo apt install mysql-server
```
### 安装本项目
```
$ sudo npm install
```
### 修改server/video/config/config.json
```text
{
  "development": {
    "username": "beaver",
    "password": "wisdom@2019",
    "database": "video",
    "host": "192.168.1.98",
    "port": 3306,
    "dialect": "mysql",
    "pool": {
      "max": 10,
      "idle": 30000
    },
    "replication" : {
      "write": {
        "username": "beaver",
        "password": "wisdom@2019",
        "host": "192.168.1.98"
      },
      "read": [
        {
          "username": "beaver",
          "password": "wisdom@2019",
          "host": "192.168.1.98"
        },
        {
          "username": "beaver",
          "password": "wisdom@2019",
          "host": "192.168.1.145"
        }
      ]
    }
  }
 }
```
### 修改server/video/config/config.json
```text
{
  "development": {
    "username": "beaver",
    "password": "wisdom@2019",
    "database": "video",
    "host": "192.168.1.98",
    "port": 3306,
    "dialect": "mysql",
    "pool": {
      "max": 10,
      "idle": 30000
    },
    "replication" : {
      "write": {
        "username": "beaver",
        "password": "wisdom@2019",
        "host": "192.168.1.98"
      },
      "read": [
        {
          "username": "beaver",
          "password": "wisdom@2019",
          "host": "192.168.1.98"
        },
        {
          "username": "beaver",
          "password": "wisdom@2019",
          "host": "192.168.1.145"
        }
      ]
    }
  }
 }
```
### 修改influx/config/models/config.json
```javascript
{
  "development": {
    "host": "192.168.1.56",
    "port":  8086,
    "database": "test",
    "username": "beaver",
    "password": "wisdom@2019"
  },
  "production": {
  }
}
```
### 运行
```
$ npm start:dev
or
pm2 start pm2robot.json
pm2 start pm2beaver.json
```
## Sequelize

## 使用
### 读取
<!-- ```text
GET https://beaver.sstzy.net/v1/api/videos?skip=0&limit=6&order=-updatedAt&where={"name":"来"}&total=11
``` -->
<!-- 返回结果（ "name" 包含“来”）： -->
<!-- ```json
{
    "count": 1,
    "rows": [
        {
            "id": 8,
            "name": "有来医生",
            "description": "自北京大学人民医院肝胆外科的权威专家陈雷主任医师副教授，擅长肝胆胰脾疑难杂症和良恶性肿瘤的早期诊断、鉴别诊断、微创治疗、免疫治疗及精准治疗。本次客座有来微视，为大家带来关于“胆结石、胰腺癌”的健康科普知识。",
            "season": 1,
            "episodes": 1,
            "language": "普通话",
            "region": "中国内地",
            "producedtime": "2019-04-04T00:00:00.000Z",
            "copyright": "爱奇艺",
            "createdAt": "2019-04-04T18:03:44.000Z",
            "updatedAt": "2019-04-04T18:03:44.000Z",
            "rating": {
                "id": 9,
                "rating": 6,
                "hitrate": 23455,
                "createdAt": "2019-04-04T18:06:32.000Z",
                "updatedAt": "2019-04-04T18:06:32.000Z",
                "videoId": 8
            },
            "staffs": [
                {
                    "id": 13,
                    "name": "陈雷",
                    "position": "嘉宾",
                    "role": null,
                    "roledescription": null,
                    "createdAt": "2019-04-04T18:10:54.000Z",
                    "updatedAt": "2019-04-04T18:10:54.000Z",
                    "videoId": 8
                },
                {
                    "id": 52,
                    "name": "wqer",
                    "position": "wq",
                    "role": "wr",
                    "roledescription": "rr",
                    "createdAt": "2019-04-13T00:52:18.000Z",
                    "updatedAt": "2019-04-13T00:52:18.000Z",
                    "videoId": 8
                },
                {
                    "id": 55,
                    "name": "wqer",
                    "position": "wq",
                    "role": "wr",
                    "roledescription": "rr",
                    "createdAt": "2019-04-13T00:54:39.000Z",
                    "updatedAt": "2019-04-13T00:54:39.000Z",
                    "videoId": 8
                },
                {
                    "id": 56,
                    "name": "qwer",
                    "position": "we",
                    "role": "rw",
                    "roledescription": "rr",
                    "createdAt": "2019-04-13T00:54:39.000Z",
                    "updatedAt": "2019-04-13T00:54:39.000Z",
                    "videoId": 8
                }
            ],
            "sources": [
                {
                    "id": 9,
                    "season": 1,
                    "episode": 2,
                    "totaltime": "00:02:00",
                    "playedtime": "00:01:00",
                    "title": "胆结石有什么症状？",
                    "plot": "胆结石分为胆囊结石、肝内胆管结石和肝外胆管结石，不同部位症状不一样，胆囊结石是否有症状主要取决于胆囊结石大小以及有没有梗阻、炎症。80%胆囊结石患者没有症状，多于体检中发现，而且其中又有80%终生可以没有症状，即所谓隐性结石，如果胆囊结石较大可以引起中上腹或者右上腹闷胀不适，可以向后背和肩膀放射，可以打嗝、嗳气，可以厌油腻，常常被误诊为胃痉挛或者胃溃疡，结石较小可表现为吃饭、饱餐或者夜间平卧后引起胆绞痛和急性胆囊炎。还有小石头可能因为胆囊收缩掉落至胆管，导致胆总管结石，发生黄疸。有些结石还可以长期梗阻，导致胆囊积水。胆囊结石没有感染时一般没有特殊症状，或者仅有右上腹轻度不适，有急性感染时可出现右上腹和中腹压痛、肌紧张。胆管结石间歇期也可以没有症状，或仅表现为上腹轻度不适，急性期可出现急性化脓性胆管炎表现。体检时可以有肝脏压痛。对于肝外胆管结石比较典型症状是医学中的夏科氏三联征，即病人出现腹痛、发热、黄疸。如果没有急性胆管炎时，也可以有轻度不适。",
                    "createdAt": "2019-04-04T18:06:17.000Z",
                    "updatedAt": "2019-04-04T18:06:17.000Z",
                    "videoId": 8
                }
            ],
            "tags": [
                {
                    "id": 23,
                    "name": "医疗",
                    "createdAt": "2019-04-04T18:09:11.000Z",
                    "updatedAt": "2019-04-04T18:09:11.000Z",
                    "videoId": 8
                },
                {
                    "id": 24,
                    "name": "疾病预防",
                    "createdAt": "2019-04-04T18:09:20.000Z",
                    "updatedAt": "2019-04-04T18:09:20.000Z",
                    "videoId": 8
                }
            ]
        }
    ]
}
``` -->
```text
GET https://beaver.sstzy.net/v1/api/histories?skip=0&limit=6&order=-updatedAt&where={"fibrillation":"1"}&total=11
```
返回结果（ "fibrillation" 为 "true"）：
```json
{
    "count": 1,
    "rows": [
        {
            "id": 2,
            "diabetes": false,
            "smoker": false,
            "hypertension": false,
            "cancer": false,
            "fibrillation": false,
            "cardiovascularDisease": false,
            "coronaryHeartDisease": false,
            "stroke": false,
            "gout": false,
            "hepatitis": false,
            "createdAt": "2019-05-13T19:17:14.000Z",
            "updatedAt": "2019-05-13T19:17:14.000Z",
            "profileId": 1
        }
    ]
}
```
### 插入
 <!-- ```text
POST https://beaver.sstzy.net/v1/api/video
``` -->
<!-- body: -->
<!-- ```json
{
  "name": "我们这一天",
  "description": "《我们这一天》讲述怀着三胞胎的妻子，在丈夫36岁生日当天分娩，他们意外失去了最小的儿子，却在机缘巧合下收养了被遗弃的黑人小孩；帅气性感的双胞胎哥哥是位肥皂剧演员，不甘心36岁还在做花瓶的他在摄制现场崩溃发飙，职业生涯遭遇危机；而妹妹深受肥胖症困扰，自我认同感低，遇见追求自己的男人也无法放开去爱；事业有成的高富帅黑人有着幸福的四口之家，却放不下被生父抛弃的过往，36岁生日这天他找到了生父，后者却已身患绝症，看似毫无关联的几个人，有着各自的烦恼，彼此之间的共同点在于，他们同一天生日，都是36岁。",
  "season": 1,
  "episodes": 18,
  "region": "美国",
  "language": "英语",
  "producedtime": "2019-05-03",
  "copyright": "NBC"
}
``` -->
```text
POST https://beaver.sstzy.net/v1/api/history
```
body:
```json
{
    "diabetes": 0,
    "smoker": 0,
    "hypertension": 1,
    "cancer": 0,
    "fibrillation": 1,
    "cardiovascularDisease": 0,
    "coronaryHeartDisease": 0,
    "stroke": 0,
    "gout": 0,
    "hepatitis": 0,
    "createdAt": 0,
    "updatedAt": 0,
    "profileId": 1
}
```
### 更新
<!-- ```text
PUT https://beaver.sstzy.net/v1/api/video/21
```-->
<!-- body（更新"producedtime"）: -->
<!-- ```json
{
  "name": "我们这一天",
  "description": "《我们这一天》讲述怀着三胞胎的妻子，在丈夫36岁生日当天分娩，他们意外失去了最小的儿子，却在机缘巧合下收养了被遗弃的黑人小孩；帅气性感的双胞胎哥哥是位肥皂剧演员，不甘心36岁还在做花瓶的他在摄制现场崩溃发飙，职业生涯遭遇危机；而妹妹深受肥胖症困扰，自我认同感低，遇见追求自己的男人也无法放开去爱；事业有成的高富帅黑人有着幸福的四口之家，却放不下被生父抛弃的过往，36岁生日这天他找到了生父，后者却已身患绝症，看似毫无关联的几个人，有着各自的烦恼，彼此之间的共同点在于，他们同一天生日，都是36岁。",
  "season": 1,
  "episodes": 18,
  "region": "美国",
  "language": "英语",
  "producedtime": "2017-05-01",
  "copyright": "NBC"
}
``` -->
```text
PUT https://beaver.sstzy.net/v1/api/history/1
```
body（更新"producedtime"）:
```json
{
    "diabetes": 0,
    "smoker": 0,
    "hypertension": 0,
    "cancer": 0,
    "fibrillation": 1,
    "cardiovascularDisease": 0,
    "coronaryHeartDisease": 0,
    "stroke": 0,
    "gout": 0,
    "hepatitis": 0,
    "createdAt": 0,
    "updatedAt": 0,
    "profileId": 1
}
```
### 删除
<!-- ```text
DELETE https://beaver.sstzy.net/v1/api/video/22
``` -->
```text
DELETE https://beaver.sstzy.net/v1/api/history/1
```
### 批处理
<!-- ```text
POST https://beaver.sstzy.net/v1/api/batch
```
body:
```json
[
  {
    "method": "post",
    "param": "tag",
    "body": {
      "name": "剧情",
      "videoId": 20
    }
  },
  {
    "method": "post",
    "param": "tag",
    "body": {
      "name": "喜剧",
      "videoId": 20
    }
  },
  {
    "method": "post",
    "param": "tag",
    "body": {
      "name": "家庭",
      "videoId": 20
    }
  }
]
``` -->
```text
POST https://beaver.sstzy.net/v1/api/batch
```
body:
```json
[
    {
        "method": "put",
        "param": "history/1",
        "body": {
            "diabetes": 0,
            "smoker": 0,
            "hypertension": 0,
            "cancer": 0,
            "fibrillation": 1,
            "cardiovascularDisease": 0,
            "coronaryHeartDisease": 0,
            "stroke": 0,
            "gout": 0,
            "hepatitis": 0,
            "createdAt": 0,
            "updatedAt": 0,
            "profileId": 1
        }
    },
    {
        "method": "put",
        "param": "history/2",
        "body": {
            "diabetes": 0,
            "smoker": 0,
            "hypertension": 0,
            "cancer": 0,
            "fibrillation": 1,
            "cardiovascularDisease": 0,
            "coronaryHeartDisease": 0,
            "stroke": 1,
            "gout": 0,
            "hepatitis": 0,
            "createdAt": 0,
            "updatedAt": 0,
            "profileId": 1
        }
    }
]
```
## 开发
### Schema
<!-- 修改 server/video/models/videos.js -->
<!-- ```javascript
'use strict'
module.exports = (sequelize, DataTypes) => {
  const video = sequelize.define('video', {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    season: { type: DataTypes.INTEGER },
    episodes: { type: DataTypes.INTEGER },
    language: { type: DataTypes.STRING },
    region: { type: DataTypes.STRING },
    producedtime: { type: DataTypes.DATE },
    copyright: { type: DataTypes.STRING },
  },  {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })

  video.associate = function(models) {
    // associations can be defined here
    video.hasOne(models.rating);
    video.hasMany(models.staff);
    video.hasMany(models.source);
    video.hasMany(models.tag);
    // video.hasMany(models.rating2);
  }
``` -->
修改 server/health/models/history.js
```javascript
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', 
    {
      diabetes: { //糖尿病
        type: DataTypes.BOOLEAN
      },
      smoker: { //抽烟
        type: DataTypes.BOOLEAN
      },
      hypertension: { //高血压
        type: DataTypes.BOOLEAN
      },
      cancer: { //癌症
        type: DataTypes.BOOLEAN
      },
      fibrillation: { //心房颤动
        type: DataTypes.BOOLEAN
      },
      cardiovascularDisease: { //心血管疾病
        type: DataTypes.BOOLEAN
      },
      coronaryHeartDisease: { //冠心病
        type: DataTypes.BOOLEAN
      },
      stroke: { //中风
        type: DataTypes.BOOLEAN
      },
      gout: { //痛风
        type: DataTypes.BOOLEAN
      },
      hepatitis: { //肝炎
        type: DataTypes.BOOLEAN
      },
    }, 
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  )
  return history
}
```

### 数据有效性检验
修改 server/video/middlewares/video.js
```javascript
module.exports = {
  update: [
    check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('season').optional().isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be at least 1 chars long')
  ],
  create: [
    check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('season').optional().isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be at least 1 chars long')
  ]
}
```
## InfluxDB
## 使用
### 插入
```text
POST https://beaver.sstzy.net/v1/api/measuring
```
body:
```json
[
  {
    "fields": {
      "value": 88
    },
    "tags": {
      "deviceid": 75,
      "device": "健康桌",
      "sensor": "心率计",
      "sensorid": 1234,
      "uuid": 202,
      "lon": -118.5,
      "lat": 39,
      "country": "中国",
      "region": "江苏省",
      "city": "南京",
      "postal_code": "414424",
      "location": "地点2",
      "ip": "635.172.912.314",
      "unit": "次/分钟"
    },
    "timestamp": 1557361875528000000
  }
]
```
### 查询measuring
默认查询条件
```javascript
query = { //default query
    columns: '*', // 'mean(*)'为求平均值
    limit: 10,
    orderby: 'time',
    order: 'desc',
    offset: 0,
    from: '1677-09-21T00:12:43.145224195Z', // influxdb minium time
    to:   '2262-04-11T23:47:16.854775806Z', // influxdb maxium time
    range: '', // '%2D3w'('-3w') 表示 'to' 前3周， '%2B10d'('+3d') 表示 'from' 后10天，此外时间单位还有'w', 'd', 'h', 'm', 's', 'ms', 'u',
    timezone: 'Asia/Shanghai', //参考 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
    where: '' //{"city":"南京", time:2019-05-05} 支持模糊搜索
  }
```
通过修改对应的key来改变查询条件
```TEXT
GET  https://beaver.sstzy.net/v1/api/measuring?limit=1&to=2019-05-09&from=2019-05-08
```
```json
[
    [
        {
            "time": "2019-05-08T10:36:55.528Z",
            "city": "南京",
            "country": "中国",
            "device": "健康桌",
            "deviceid": "75",
            "ip": "635.172.912.314",
            "lat": "39",
            "location": "地点2",
            "lon": "-118.5",
            "postal_code": "414424",
            "region": "江苏省",
            "sensor": "心率计",
            "sensorid": "1234",
            "unit": "次/分钟",
            "uuid": "202",
            "value": 0
        }
    ],
    [
        {
            "time": "2019-05-07T16:00:00.000Z",
            "total_value": 5
        }
    ]
]
```
```TEXT
GET https://beaver.sstzy.net/v1/api/measuring?columns=mean(*)&to=2019-05-09&range=%2D3w
```
```json
[
    [
        {
            "time": "2019-05-08T00:00:00.000Z",
            "mean_value": 64.8
        }
    ],
    [
        {
            "time": "2019-05-07T16:00:00.000Z",
            "total_value": 5
        }
    ]
]
```
## 开发
### Schema
#### 传感器测量值
修改 server/video/models/measuring.js
```javascript
module.exports = (Influx) => {
  const schema = {
    measurement: 'measuring',
    fields: {
      value: Influx.FieldType.INTEGER,
    },
    tags: [
      'timestamp', //时间戳
      'deviceid', //装置id
      'device', //装置名
      'sensorid', //传感器id
      'sensor', //传感器名
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city', //城市
      'region', //地区
      'country', //国家
      'postal_code', //邮编
      'location', //地点
      'ip', //ip地址
      'unit', //单位
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}
```
#### 血压传感器测量值
```javascript
module.exports = (Influx) => {
  const schema = {
    measurement: 'bloodpressure',
    fields: {
      systolic: Influx.FieldType.FLOAT, //收缩压
      diastolic: Influx.FieldType.FLOAT, //舒张压
    },
    tags: [
      'deviceid', //装置id
      'device', //装置名
      'sensorid', //传感器id
      'sensor', //传感器名
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city', //城市
      'region', //地区
      'country', //国家
      'postal_code', //邮编
      'location', //地点
      'ip', //ip地址
      'unit', //单位
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}
```
#### 积分操作
修改 server/video/models/bonus.js
```javascript
module.exports = (Influx) => {
  const schema = {
    measurement: 'bonus',
    fields: {
      value: Influx.FieldType.INTEGER, //本次操作的数值
    },
    tags: [
      'timestamp', //时间戳
      'action', //积分修改的动作
      'type', //积分修改的类型
      'event', //积分修改的事件
      'source', 
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city',
      'region',
      'country',
      'postal_code',
      'location',
      'ip',
      'adjustment', //分数调整
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}
```
### 积分统计
```javascript
module.exports = (Influx) => {
  const schema = {
    measurement: 'pointbalance', //积分结算的数目
    fields: {
      balance: Influx.FieldType.INTEGER,
    },
    tags: [
      'pointoperationid', //  结算截至哪一笔操作的id，
    ]
  }
  return schema
}
```
### 风险测算api
修改beaver\server\health\controllers\diabetesrisk.js
influxParams是来自influx的数据，参考[查询measuring](#查询measuring)
```javascript
const influxParams = [
           {
             api:'measuring',
             param:{
              key:'weight',
              columns:'mean(value)', 
              where:'{"sensor":"fake_weight_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'heartrate',
              columns:'mean(value)', 
              where:'{"sensor":"fake_heartrate_sensor"}'
              },
            },
           {
             api:'bloodpressure',
             param:{
              key:'systolic',
              columns:'mean(systolic)', 
              from:'2019-05-21',
              to:'2019-05-22',
              where:'{"sensor":"fake_blood_pressure_sensor"}'
              },
            },
           {
             api:'bloodpressure',
             param:{
              key:'diastolic',
              columns:'mean(diastolic)', 
              from:'2019-05-21',
              to:'2019-05-22',
              where:'{"sensor":"fake_blood_pressure_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'glucose',
              columns:'mean(value)', 
              where:'{"sensor":"fake_blood_glucose_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'insulin',
              columns:'mean(value)', 
              where:'{"sensor":"fake_insulin_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'uricacid',
              columns:'mean(value)', 
              where:'{"sensor":"fake_uricacid_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'triglycerides',
              columns:'mean(value)', 
              where:'{"sensor":"fake_triglycerides_sensor"}'
              },
            },
           {
             api:'measuring',
             param:{
              key:'serumcholesterol',
              columns:'mean(value)', 
              where:'{"sensor":"fake_serumcholesterol_sensor"}'
              },
            },
          ]
```
assembles是请求sequelize部分的静态数据
```javascript
        const assemble = {
          date_of_birth: '1990-01-01',
          gender: 0,
          smoker: result.dataValues['smoker'],
          diabetesFamily: result.dataValues.familyhistories[0]['familydiabetes'],
          gestational: result.dataValues.histories[0]['gestational'],
          height: result.dataValues.histories[0]['height'],
        }
```
CURL -G http://localhost:3000/v1/api/diabetesrisk/1
```json
{
    "date_of_birth": "1990-01-01",
    "gender": 0,
    "smoker": false,
    "diabetesFamily": false,
    "gestational": false,
    "height": null,
    "weight": 74.94,
    "heartrate": 65.14,
    "systolic": 84.98,
    "diastolic": 110.18,
    "glucose": 6,
    "insulin": 5.5,
    "uricacid": 5.5,
    "triglycerides": 1.7,
    "serumcholesterol": 3.1
}
```