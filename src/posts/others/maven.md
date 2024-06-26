---
date: 2023-08-03
tag: Maven
category: 其他
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/unglp2.jpg
---

# Maven

## 一、Maven 标准目录结构

- src
  - main
    - java *//java 源代码文件*
    - resources *//资源库*
    - webapp
      - WEB-INF
        - index.jsp
      - css/js
    - Bin *//脚本库*
    - config *//配置文件*
    - filters *//资源过滤库*
- test
  - java *//java 测试源代码文件*
  - resources *//测试资源库*
  - filters *//测试资源过滤库*
- targe *//存放项目构建后的文件和目录，如 jar 包，war 包，class 文件等*



## 二、POM（project object model）文件

### 项目配置信息

- project：工程等根标签

- modelVersion：pom 模型版本，maven2 和 3 只能为 4.0.0

- groupId：这是工程组的标识。它在一个组织或者项目中通常是唯一的。

- artifactId：这是工程的标识。通常是工程的名称

- version：工程的版本号

- packaging：定义 Maven 项目的打包方式，有 pom、jar、war 三种格式

- - packing默认是 jar 类型，
  - pom  --------->  父类型都为 pom 类型
  - jar     --------->  内部调用或者是作服务使用
  - war   --------->  需要部署的项目
