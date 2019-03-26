"use strict"
const validator = require('validator');
const moment = require('moment');
const validatiton = {
    users:{
        uid:{
            type: 'int',
            min: 0,
            max: 1000,
            notNull: 'false', 
        },
        age:{
            type: 'int',
            min: 0,
            max: 100,
            notNull: 'false', 
        },
        name:{
            type: 'string',
        },
        email:{
        },
    },
    appointments:{
        appointtime:{
            type: 'time',
            min: Date.now(),
        }
    }
}

exports.validate = function(table, columns){
    for(var key in columns){
        if( validatiton.hasOwnProperty(table) ){
            if( validatiton[table].hasOwnProperty(key) ){
                if(validatiton[table][key].type == 'int'){
                    if( parseInt(columns[key]) < validatiton[table][key].min
                        || parseInt(columns[key]) > validatiton[table][key].max){
                            return [false,  columns[key], key  + "的范围是" + validatiton[table][key].min
                            + "到" + validatiton[table][key].max]
                        }
                }
                if(validatiton[table][key].type == 'string'){
                }
                if(key === 'email' && !validator.isEmail( columns[key] )){
                    return [false, columns[key], key + "的格式不对"]
                }
                if(key === 'appointtime' && (Date.parse(columns[key]) < validatiton[table][key].min)){
                    return [false, columns[key], "预约时间要比当前时间晚"]
                }
            }
        }
    }
    return [true, "", ""]
}
