# 📝 Guess The Gifts!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52ae6b6623b443d9090002c8)

### 💡 Solution

```javascript
function guessGifts(wishlist, presents) {
    return wishlist.filter(item => {
        return presents.some(p =>
            p.size === item.size &&
            p.clatters === item.clatters &&
            p.weight === item.weight
        );
    }).map(({ name }) => name);
}
```
