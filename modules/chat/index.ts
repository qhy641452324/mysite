const axios = require('axios');

// const loggers = require("../logsmodel/koalogger");

export default {
    getChatBack: async function (key:any) {
        // loggers.info()
        // https://open.drea.cc/chat/get?keyWord=4&userName=type%3Dbbs
        var url = 'http://open.drea.cc/bbsapi/chat/get';//{"data":{"keyWord":"1","reply":"MM酱也同意哒说~+1!!!"},"isSuccess":true,"code":"0","message":""}
        var pars = {
            keyWord:key,
            userName:'type=bbs'
        }
        let back = await axios.get(url, {
            params: pars
        });
        var data = back.data;
        
        if (data.isSuccess) {
            return {
                reply : data.data.reply
            }
        }else {
            return []
        }

    }
}