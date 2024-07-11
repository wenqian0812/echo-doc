# 一维数组、树结构相互转换

## 一维数组转树结构

### JavaScript 版本

```javascript
/**
 * flat array to tree
 * @param node
 */
export const toTree = (node) => {
    // 定义map/
    const map = {};
    // 这里可以重构数据类型，放回字段值
    node.forEach(function (it) {
      map[it.id] = it;
    })

    // 定义返回集合
    const val = [];
    node.forEach(function (it) {
      const parent = map[it.pid];
      if (parent) {
        ((parent.children) || (parent.children = [])).push(it);
      } else {
        val.push(it);
      }
    });
    return val;
  }
```

### TypeScript 版本

```typescript
/**
 * flat array to tree
 * @param node
 */
export const toTree = (node: INodeItem[]) => {
    // 定义map/
    const map: { [k: string]: INodeItem } = {};
    // 这里可以重构数据类型，放回字段值
    node.forEach(function (it) {
      map[it.id] = it;
    })

    // 定义返回集合
    const val: INodeItem[] = [];
    node.forEach(function (it) {
      const parent = map[it.pid];
      if (parent) {
        ((parent.children) || (parent.children = [])).push(it);
      } else {
        val.push(it);
      }
    });
    return val;
  }
```
