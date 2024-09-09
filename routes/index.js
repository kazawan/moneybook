const router = require('express').Router();
const db = require('../db');
const parseDateTimeToJson = require('../helper/time_conv.js');
const date_filter = require('../helper/date_filter.js');


router.get('/all', (req, res) => {
    const page = parseInt(req.query.page) || 1; // 默认第一页
    const limit = parseInt(req.query.limit) || 10; // 默认每页10条
    const offset = (page - 1) * limit;
    const year = parseInt(req.query.year);    // 年
    const month = parseInt(req.query.month);    // 月
    const day =parseInt( req.query.day);    // 日
    

    db.all(`SELECT * FROM incomes_expenses LIMIT ${limit} OFFSET ${offset}`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Error retrieving data' });
            return;
        }
        let data = date_filter(rows, year, month, day);
        res.json(data); 
    });



});


router.post('/insert', (req, res) => {
    const { isIncomes, amount, category, date, description } = req.body;
    const year = parseDateTimeToJson(date).year;
    const month = parseDateTimeToJson(date).month;
    const day = parseDateTimeToJson(date).day;
    const time = parseDateTimeToJson(date).time;
    const sql = `INSERT INTO incomes_expenses (type, amount, category, year, month, day, time, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [isIncomes, amount, category, year, month, day, time, description], function (err) {
        if (err) {
            res.status(400).json({ error: 'Error inserting data' });
            return;
        }
        res.status(201).json({ id: this.lastID });
    });
});



module.exports = router;        