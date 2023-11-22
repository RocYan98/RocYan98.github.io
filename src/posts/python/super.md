---
date: 2023-08-10
tag: 
  - Python
  - PyTorch
category: Python
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/a3e3m3.jpeg
order: 1
---

# super(net, self).__init__()

在 PyTorch 中要自己定义一个模型的时候，总会在初始化函数中遇到类似`super(net, self).__init__()`的代码，比如：

```python
class net(nn.Module):
    def __init__(self):
        super(net, self).__init__()
        
    def forward(self):
        pass
```

其实`super(net, self).__init__()`和`super().__init__()`是等价的，Python 解释器在执行`super().__init__()`时会通过`__class__`变量自动填充当前类和实例，这个特殊语法只能在 Python3 中使用，不能在 Python2 中使用，因此 PyTorch 的教程中大部分都是用的第一种写法，而 Python 的教程更多的都是第二种写法。`super().__init__()`实际上就等价于`nn.Module.__inin__()`，本质上就是调用父类的初始化方法，使用`super`的好处就是不需要显示的写出父类，这样有利于后续维护与更新（比如改变了父类，但是这段代码不用改）。

顺带提一句，Python 语法规定类里面的方法都必须有一个`self`参数，表示的是实例本身。

在使用 PyTorch 构建，我们通常需要自定义模型类并继承 PyTorch 的基础模块类`nn.Module`。在自定义的模型类中，通常需要在`__init__`方法中调用`super().__init__()`，这是为了正确地初始化`nn.Module`类的内部状态。只有调用了`super().__init__()`之后，才能创建子模块：

```python
class MyModel(nn.Module):
    def __init__(self, input_size, output_size):
        # 下面两行代码，交换顺序就会报错
        super().__init__()
        self.linear = nn.Linear(input_size, output_size)

    def forward(self, x):
        return self.linear(x)
```

