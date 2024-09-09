const express = require('express'); // 引入express模块  
// const db = require('./db'); // 引入数据库模块
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;



app.use(cors());    

app.use(express.json()); // 解析json格式数据    
app.use('/api', routes); // 使用routes中间件



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
