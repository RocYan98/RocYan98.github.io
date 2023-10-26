import{_ as e,o as l,c as i,f as a}from"./app-dd5a2330.js";const r={},t=a('<h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h1><h2 id="一、maven-标准目录结构" tabindex="-1"><a class="header-anchor" href="#一、maven-标准目录结构" aria-hidden="true">#</a> 一、Maven 标准目录结构</h2><ul><li>src <ul><li>main <ul><li>java <em>//java 源代码文件</em></li><li>resources <em>//资源库</em></li><li>webapp <ul><li>WEB-INF <ul><li>index.jsp</li></ul></li><li>css/js</li></ul></li><li>Bin <em>//脚本库</em></li><li>config <em>//配置文件</em></li><li>filters <em>//资源过滤库</em></li></ul></li></ul></li><li>test <ul><li>java <em>//java 测试源代码文件</em></li><li>resources <em>//测试资源库</em></li><li>filters <em>//测试资源过滤库</em></li></ul></li><li>targe <em>//存放项目构建后的文件和目录，如 jar 包，war 包，class 文件等</em></li></ul><h2 id="二、pom-project-object-model-文件" tabindex="-1"><a class="header-anchor" href="#二、pom-project-object-model-文件" aria-hidden="true">#</a> 二、POM（project object model）文件</h2><h3 id="项目配置信息" tabindex="-1"><a class="header-anchor" href="#项目配置信息" aria-hidden="true">#</a> 项目配置信息</h3><ul><li><p>project：工程等根标签</p></li><li><p>modelVersion：pom 模型版本，maven2 和 3 只能为 4.0.0</p></li><li><p>groupId：这是工程组的标识。它在一个组织或者项目中通常是唯一的。</p></li><li><p>artifactId：这是工程的标识。通常是工程的名称</p></li><li><p>version：工程的版本号</p></li><li><p>packaging：定义 Maven 项目的打包方式，有 pom、jar、war 三种格式</p></li><li><ul><li>packing默认是 jar 类型，</li><li>pom ---------&gt; 父类型都为 pom 类型</li><li>jar ---------&gt; 内部调用或者是作服务使用</li><li>war ---------&gt; 需要部署的项目</li></ul></li></ul>',6),n=[t];function o(m,c){return l(),i("div",null,n)}const d=e(r,[["render",o],["__file","maven.html.vue"]]);export{d as default};