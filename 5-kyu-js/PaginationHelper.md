# 📝 PaginationHelper

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/515bb423de843ea99400000a)

### 💡 Solution

```javascript
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() { return Math.ceil(this.collection.length / this.itemsPerPage); }

    itemCount() { return this.collection.length; }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
        if (pageIndex === this.pageCount() - 1) return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        return this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}
```
