module.exports =
{  
    users: "CREATE TABLE IF NOT EXISTS `users` (\
        `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,\
        `gender` varchar(50) DEFAULT NULL,\
        `age` int(11) DEFAULT NULL,\
        `name` varchar(50) DEFAULT NULL,\
        `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\
        `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`uid`)\
      ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8"
      ,
    appointments: "CREATE TABLE IF NOT EXISTS `appointments` (\
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\
        `uid` int(10) unsigned NOT NULL ,\
        `appointtime` DATETIME DEFAULT '0001-01-01 00:00:00',\
        `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\
        `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`id`)\
      ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8"
      //alter table testdb.appointments add column purpose varchar(80);
      ,

}
