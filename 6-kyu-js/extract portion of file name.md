# 📝 extract portion of file name

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/597770e98b4b340e5b000071)

### 💡 Solution

```javascript
class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.replace(/^\d+_|(\.\w+)(\..+)/g, '$1');
    }
}
```
