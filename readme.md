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
### 修改model/database.config

```text
module.exports =
{  
        mysql0: {
                connectionLimit: 100, 
                host: 'sstzy.net',     
                user: 'beaver',   
                password: '*********',  
                database:'testdb',
                port: 33157  
        },

        mysql1: {
                connectionLimit: 100,
                host: 'sstzy.net',     
                user: 'beaver',   
                password: '*********',  
                database:'testdb',
                port: 33195  
        }
}
```

### 运行

```
$ npm start
```

## 使用

### 读取

#### 1.单个表查询

GET `https://beaver.sstzy.net/api/user/tablename?column1=value1&column2=value2...&descorder=column&limit=100&page=0`

例如读取user表中gender为女，age为29的所有用户，age的order为desc，limit为100，page为0（limit*page=OFFSET）：

GET `https://beaver.sstzy.net/api/user/users?age=29&gender=女&descorder=age`

#### 2.多个表联合查询

GET `https://beaver.sstzy.net/api/user/tablename1/tablename1?join=joincolumn&column1=value1&column2=value2...&ascorder=column&limit=100&page=0`

例如联合appointments表和user表查询且共同column为uid，读取联合表中gender为女的3个用户，则join为uid，默认page为0（limit*page=OFFSET）：

GET `https://beaver.sstzy.net/api/user/appointments/users?join=uid&gender=女&limit=3`

### 插入
POST `https://beaver.sstzy.net/api/user/tablename?column1=value1&column2=value2...`

例如插入user表中name为李测试，gender为男，age为29：

POST `https://beaver.sstzy.net/api/user/users?age=29&name=李测试&gender=男`
### 更新
PUT `https://beaver.sstzy.net/api/user/tablename?obj-column1=value1&obj-column2=value2&column3=value3`

例如将user表中name为李测试，gender为男的用户，age修改为30：

注意筛选条件需在column名加obj-

PUT `https://beaver.sstzy.net/api/user/users?age=30&obj-name=李测试&obj-gender=男`
### 删除
DELETE `https://beaver.sstzy.net/api/user/tablename?obj-column1=value1&obj-column2=value2...`

例如删除user表中name为李测试，gender为男，age为30的用户：

注意筛选条件需在column名加obj-

DELETE `https://beaver.sstzy.net/api/user/users?obj-age=30&obj-name=李测试&obj-gender=男`

## 开发

### 创建表

修改/model/user/tbSchemas.js, 添加需要创建的表的schema

![img](https://bitbucket.org/wisdomaic/beaver/raw/6cf14fa222e0d60382fd717547010b7cf9c1b009/readme/create.png)

### 数据操作

#### 1.修改

```text
/model/user/dbGET
/model/user/dbPOST
/model/user/dbDELETE
/model/user/dbPUT
```

中对应function

![img](https://bitbucket.org/wisdomaic/beaver/raw/6cf14fa222e0d60382fd717547010b7cf9c1b009/readme/function.png)

#### 2.在/api中添加router

![img](https://bitbucket.org/wisdomaic/beaver/raw/6cf14fa222e0d60382fd717547010b7cf9c1b009/readme/api.png)

### 数据有效性检验

修改
```text
/model/user/validation.js
```
在validatiton中添加规则，并在下面的function中对相应的类型进行处理

![img](https://bitbucket.org/wisdomaic/beaver/raw/aea963d9105150bcf37cf8e6901a274842c0ffb4/readme/validation.png)