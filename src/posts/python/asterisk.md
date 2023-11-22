---
date: 2023-08-10
tag: Python
category: Python
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/a3e3m3.jpeg
order: 2
---

# 参数中的星号

## 1 参数中的 *args 和 **kwargs

在了解 \*args 和 \*\*kwargs 的作用之前，首先要理解 \* 和 \*\* 在 Python 中的使用。\* 和 \*\* 主要有三方面的用途：

1. 对可迭代对象进行拆分
2. 可变变量的赋值
3. 函数的可选参数标志

### 1.1 对可迭代对象进行拆分

```python
print(*(1, 2, 3)) # 1 2 3
print(*{'a': 1, 'b': 2, 'c': 3}) # a b c 拆解字典时只拆解key
print({**{'a': 1, 'b': 2, 'c': 3}})# {'a': 1, 'b': 2, 'c': 3}对key和value都进行了拆解
```

所以对于 \*args 和 \*\*kwargs，args 就是可迭代对象，而 kwargs 就是字典

### 1.2 可变变量的赋值

对于一个可迭代对象 l，如果想把第一个元素赋值给变量 a，最后一个元素赋值给 c，而把剩下的元素统统赋值给变量 b，第一想法可能是用切片，这样需要写三行代码，太麻烦，并且对 unsubscriptable 的对象是不适用的（比如集合），所以用 * 可以解决这个问题。

```python
a, *b, c = {1, 2, 3, 4, 5, 6}
#a = 1, b = [2, 3, 4, 5], c = 6
```

### 1.3 函数的可选参数标志

理解了前面两点后，这一点就是把前两点给结合起来运用。如果是单星号 \* 标记的就是可选的位置参数（positional arguments），如果是双星号 \*\* 标记的就是可选的关键词参数（keyword arguments）

```python
def function(a, *args, **kwargs):
    print(a, args, kwargs)
    
function(1, 2, 3, c=4, d=5) # 输出1 (2, 3) {'c': 4, 'd': 5}
```



## 2 参数中的 / 和 *

先要搞清楚**必选参数**，**默认参数**，**可变长度的位置参数**，**可变长度的关键字参数**，**位置参数**和**关键字参数**分别表示的是什么

```python
def function(a, b, c, d=4, *args, **kwargs):
	pass
```

在上面这个例子中，a，b，c 是**必选参数**，d 是**默认参数**，args 和 kwargs 分别是**可变长度的位置参数**和**可变长度的关键字参数**，有了第一节的讲解这个应该很容易理解。当然也可以改变**默认参数**的值，比如`function(1, 2, 3, d=5)`那么此时 d 的值就是 5 而不再是 4。

args 和 kwargs 我个人觉得还是尽量少用，如果函数中有这两个参数，那么必须通过调用才知道传进来的是什么内容，并且同时有这4种参数时，顺序规则比较复杂（想要了Python中默认的函数参数顺序的可以参考[知乎上这篇文章的第五节内容](https://zhuanlan.zhihu.com/p/479358658)或[PEP 3102 – Keyword-Only Arguments](https://peps.python.org/pep-3102/)），因此接下来就不再考虑这两个参数。

**位置参数**和**关键字参数**是函数调用时候的概念，而上面四种参数是函数定义时候的概念。

```python
def function(a, b, c, d=4):
    print(a, b, c, d)
    
function(1, 2, c=3, d=5) # 输出 1 2 3 5
```

此时 1 和 2 是**位置参数**，3 和 5 是**关键字参数**，**默认参数**不一定是**关键字参数**，比如`function(0, 1, 2, 3)`此时就是通过**位置参数**的方式传递给 d。

Python 规定**位置参数**在左，**关键字参数**在右，比如`function(1, b=2, 3)`这就会报错，**位置参数**必须严格在**关键字参数**的左边。

Python3.8 之后函数参数中允许出现 / 和 \* 号，/ 用来指明某些函数形参必须使用**位置参数**的形式，对于单独出现在参数中的 \* 参数，则表示，\* 后面的参数必须为**关键字参数**的形式，比如：

```python
def function(a, b, /, c, *, d, e)
	pass

function(1, 2, 3, d=4, e=5)
function(1, 2, c=3, d=4, e=5)
```

a 和 b 只能用**位置参数**的形式，c 既可以用**位置参数**的形式又可以用**关键字参数**的形式，d 和 e 只能用**关键字参数**的形式。

## Reference

[【Python】函数中的*args和**kwargs是个什么东西？](https://zhuanlan.zhihu.com/p/479358658)

[PEP 3102 – Keyword-Only Arguments](https://peps.python.org/pep-3102/)

[python函数参数中的/和*是什么意思？ - 星晚的回答 - 知乎](https://www.zhihu.com/question/287097169/answer/453193254)
