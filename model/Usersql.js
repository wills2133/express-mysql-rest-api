var UserSQL = {  
    insert:'INSERT INTO users(uid,name) VALUES(?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserById:'SELECT * FROM User WHERE uid = ? ',
  };
module.exports = UserSQL;