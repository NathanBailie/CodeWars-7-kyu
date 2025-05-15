# 📝 FIXME: Get Full Name

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/597c684822bc9388f600010f)

### 💡 Solution

```javascript
class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        if (this.firstName && this.lastName) return this.firstName + " " + this.lastName;
        if (this.firstName) return this.firstName;
        return this.lastName;
    }
}
```
