"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
// const loggers = require("../logsmodel/koalogger");
exports.default = {
    getChatBack: async function (key) {
        // loggers.info()
        // https://open.drea.cc/chat/get?keyWord=4&userName=type%3Dbbs
        var url = 'http://open.drea.cc/bbsapi/chat/get'; //{"data":{"keyWord":"1","reply":"MM酱也同意哒说~+1!!!"},"isSuccess":true,"code":"0","message":""}
        var pars = {
            keyWord: key,
            userName: 'type=bbs'
        };
        let back = await axios.get(url, {
            params: pars
        });
        var data = back.data;
        if (data.isSuccess) {
            return {
                reply: data.data.reply
            };
        }
        else {
            return [];
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2NoYXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0IscURBQXFEO0FBRXJELGtCQUFlO0lBQ1gsV0FBVyxFQUFFLEtBQUssV0FBVyxHQUFPO1FBQ2hDLGlCQUFpQjtRQUNqQiw4REFBOEQ7UUFDOUQsSUFBSSxHQUFHLEdBQUcscUNBQXFDLENBQUMsQ0FBQSw0RkFBNEY7UUFDNUksSUFBSSxJQUFJLEdBQUc7WUFDUCxPQUFPLEVBQUMsR0FBRztZQUNYLFFBQVEsRUFBQyxVQUFVO1NBQ3RCLENBQUE7UUFDRCxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsT0FBTztnQkFDSCxLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQzFCLENBQUE7U0FDSjthQUFLO1lBQ0YsT0FBTyxFQUFFLENBQUE7U0FDWjtJQUVMLENBQUM7Q0FDSixDQUFBIn0=