# 测试

```sh
curl -X POST -H "Content-Type: application/json" -d '{"isIncomes":true, "amount":200, "category":"salary", "date":"2024-09-05", "description":"monthly salary"}' http://localhost:3000/api/incomes-expenses
```


```sh

curl -X POST -H "Content-Type: application/json" -d '{"isIncomes":true, "amount":200, "category":"salary", "date":"2024-09-05", "description":"monthly salary"}' http://192.168.3.123:3000/api/incomes-expenses
```