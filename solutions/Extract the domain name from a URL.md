# 📝 Extract the domain name from a URL

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/514a024011ea4fb54200004b)

### 💡 Solution

```javascript
const domainName = url => url.match(/(?:https?:\/\/)?(?:www\.)?([\w\d-]+)\./)[1];
```
