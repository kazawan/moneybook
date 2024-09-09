function parseDateTimeToJson(dateTimeStr) {
    // 正则表达式匹配年月日和时间
    const regex = /^(\d{4})年(\d{1,2})月(\d{1,2})日 (\d{1,2}):(\d{2})$/;
    const match = dateTimeStr.match(regex);
  
    if (match) {
      // 将年月日和时间分别赋值给对象的属性
      const result = {
        year: parseInt(match[1], 10),
        month: parseInt(match[2], 10),
        day: parseInt(match[3], 10),
        time: `${match[4]}:${match[5]}`
      };
      // 将对象转换为JSON格式的字符串
      return result;
    } else {
      throw new Error('Invalid date time format');
    }
  }

module.exports = parseDateTimeToJson
