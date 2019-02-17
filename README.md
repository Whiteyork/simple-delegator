# simple-delegator


## Example

```js
let parent = {
  child: {
    a: 10,
    b: function() {
      return 'b'
    }
  }
}

new Delegator(parent, 'child')
  .method('b')
  .getter('a')

parent.b()  // return 'b'
parent.a    // 10
```

for more information, go to https://github.com/tj/node-delegates

> details:     [node-delegates/Readme.md](https://github.com/tj/node-delegates/blob/master/Readme.md)
# License

  MIT
