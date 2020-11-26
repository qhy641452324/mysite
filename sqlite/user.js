const sequelize = require('sequelize');
const mySqliteDB = require('./index');

// 创建user表:https://blog.csdn.net/alex_my/article/details/83062458
const {
    STRING,INTEGER,
    DATE,
    NOW,
    JSON
} = sequelize;

const User = mySqliteDB.define('user',{
    id: {
        type: INTEGER,
        autoIncrement: true,
        // 做为主键：这个不可少
        primaryKey: true,
    },
    user_name:{type:STRING(32)},
    pwd: { type: STRING(32) },
    nickname:{
        type: STRING(32),
        // validate: {
        //     min: 4,
        //     max: 12,
        // }
        // 假设昵称后要加上 id 值
        // get() {
        //     const id = this.getDataValue('id');
        //     return this.getDataValue('nickName') + '-' + id;
        // },
    },
    phone_num:{type:INTEGER(11)},
    addr:{type:STRING(32)}
})


module.exports = {
    createTable: async()=>{
        await User.sync({
            force:false
        })
    },
    insertUser:async(obj)=>{
        return await User.create({
            user_name: obj.name,
            nickname: obj.nickname,
            pwd:obj.pwd,
            phone_num: obj.phonenum,
            addr: obj.region
        })      
    },
    queryUser:async(id,name)=>{
        return await User.findOne({
            where:{
                id: id
                // [Op.or]: [{ id: id }, { user_name:name}]
                // [Op.or]: [{ id: id }]
            }
        })
    },
}


