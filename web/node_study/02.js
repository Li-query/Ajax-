//node软件给我们提供的模块(给JS赋予了超能力),node软件本身就具有的


//fs:  可以向某一个文件写入数据
var fs = require("fs");

//queryString模块:可以将JSON数据格式转化为querystring字符串
var querystring  =  require("querystring");

//写入数据
//fs.writeFile("./lr.txt","今天好好学vue",function () {
//    console.log("数据写入成功.....");
//});

//读取数据
//fs.readFile("./lr.txt",function (err,data) {
//    console.log(data.toString());
//})

//将JSON数据格式转化为queryString字符串

console.log(querystring.stringify({"a":1,"b":2,"c":3}))