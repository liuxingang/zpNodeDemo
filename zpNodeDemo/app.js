var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-Parser');

var app = express();
app.use(bodyParser.json({ limit: '1mb' })); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));


//配置数据库
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'nodedemo'
});

//链接数据库
connection.connect();


//前台展示
app.get('/server/news',function(req,res){
	//查询数据库
	connection.query('SELECT * FROM news ',function(err,rows){
		if(err) throw err;
		res.send(rows);
		console.log("\n咨询数据推送成功\n");
		
	});
	// res.send("hello 1");
});

//增加新闻
app.post('/server/addnews', function(req, res) {
    var json = req.body;    
    var sql = "INSERT INTO news SET  newstitle='" + json.newstitle + "', newsimg='" + json.newsimg + "',newscontent='" + json.newscontent + "',newstime='" + json.newstime +"'";
    connection.query(sql, function(error, results) {
        if (error) {
            console.log("插入记录出错: " + error.message);
            return;
        }
        res.send(results);
        console.log('添加成功');
        console.log('Inserted: ' + results.affectedRows + ' row.'); //affectedRows函数返回前一次 MySQL 操作所影响的记录行数
        console.log('Id inserted: ' + results.insertId); //insertId函数返回上一步 INSERT 操作产生的 ID
    });

});

//删除新闻
app.post('/server/delnews', function(req, res) {
    var id = req.body.id;
    console.log(id);

    var sql = "delete from news where id='"+ id +"'";
    connection.query(sql,function(error, results) {
        if (error) {
            console.log("插入记录出错: " + error.message);
            return;
        }
        res.send(results);
        console.log('删除成功');
    });
});


//修改新闻  ---原始数据展示

app.get('/server/updatanews', function(req, res) {
    var id = req.query.id;
    console.log(id);

    var sql = "select * from news where id='" + id + "'";
    connection.query(sql, function(error, results) {
        if (error) {
            console.log("插入记录出错: " + error.message);
            return;
        }
        res.send(results);
        console.log('修改成功');
        console.log(results);
    });

});

//修改新闻
app.post('/server/renew', function(req, res) {
    var json = req.body;
    console.log(json.id);
    var sql = "update news set newstitle='" + json.newstitle + "', newsimg='" + json.newsimg + "',newscontent='" + json.newscontent + "',newstime='" + json.newstime +"' where id='" + json.id + "'";
    connection.query(sql, function(error, results) {
        if (error) {
            console.log("插入记录出错: " + error.message);
            return;
        }
        res.send(results);
        console.log('修改成功');
        console.log('Inserted: ' + results.affectedRows + ' row.'); //affectedRows函数返回前一次 MySQL 操作所影响的记录行数
        console.log('Id inserted: ' + results.insertId); //insertId函数返回上一步 INSERT 操作产生的 ID
    });


});


var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('app listening at http://%s:%s',host,port);
})