const userModel = require('../sqlite/user');
class userController {
    static async insertUser(ctx){
        let params = ctx.request.body;
        if(params){
            try{
                const ret = await userModel.insertUser(params);
                ctx.body = {
                    code:200,
                    msg:'success',
                    data:ret
                }
            }catch (err){
                ctx.body = {
                    code: 200,
                    msg: '失败',
                    data: err.message
                }
            }
        }else{
            ctx.body = {
                code: 200,
                msg: '失败',
                data: '....'
            }
        }
    };
    static async getUserInfo(ctx){
        console.log(ctx.params)
        let params = ctx.params;
        if(params){
            try {
                let data = await userModel.queryUser(params.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            } catch (error) {
                ctx.response.status = 413;
                ctx.body = {
                    code: 413,
                    msg: '查询失败',
                    data:''
                }
            }
        }else{
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
                data:''
            }
        }
    } 
}

module.exports = userController;