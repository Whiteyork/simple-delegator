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

# API

## Delegate(delegatedObj, prop)

## Delegate.auto(proto, targetProto, targetProp)

## Delegate#method(name)

## Delegate#getter(name)

## Delegate#setter(name)

## Delegate#access(name)

## Delegate#fluent(name)

> details:     [node-delegates/Readme.md](https://github.com/tj/node-delegates/blob/master/Readme.md)
# License

  MIT