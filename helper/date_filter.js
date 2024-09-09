function date_filter(arr,year, month, day,) {
    return arr.filter(item => {
        if (year && month && day) {
            return item.year === year && item.month === month && item.day === day;
        } else if (year && month) {
            return item.year === year && item.month === month;
        } else if (year) {
            return item.year === year;
        } else {
            return arr;
        }
    });

}


module.exports = date_filter;   