const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/My_money.db');
const fs = require('fs');
const db_path = './db/My_money.db';

if (!fs.existsSync(db_path)) {
    db.serialize(function () {
        // 数据结构 
        // 创建表 incomes_expenses
        // id 自动增长
        // type 布尔  如何为收入 true 为支出 false
        // amount 金额
        // category 类别
        // 年
        // 月
        // 日
        // 时间
        // description 描述
        
        db.run("CREATE TABLE incomes_expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, type BOOLEAN, amount INTEGER, category TEXT, year INTEGER, month INTEGER, day INTEGER, time TEXT, description TEXT)");
        // 插入数据
        db.run("INSERT INTO incomes_expenses (type, amount, category, year, month, day, time, description) VALUES (1, 100, '工资', 2021, 1, 1, '08:00', '发工资')");
        

        

    });
} else {
    console.log('Database already exists');

}

module.exports = db;

