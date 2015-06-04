# CodeGuide
## AlloyTeam代码规范 

### 1. 为什么要有团队代码规范？  
虽然这些细节是小事，不会有体验或者性能上的优化，但是却体现了一个coder和团队的专业程度 
团队的愿景：成为业界卓越的Web团队！  
所以不管团队有多少人，代码风格都应该师出同门！ 

### 2. 如何使用？ 
在使用之前花一点时间把[规范](http://alloyteam.github.io/CodeGuide/)看一遍是很必要的，  
然后按照[这里](http://alloyteam.github.io/CodeGuide/#check)的步骤配置好编辑器和构建检查（目前仅提供了sublime3和grunt的配置）

主要使用到了jscs，jshint，sass-lint，csslint 四个规范检查插件，  
JsFormat（它其实用的是jsbeautifier），CSScomb两个格式化的插件，  
使用其他编辑器的话可以自己去搜一下相关的这些插件。

配置好后，保存的时候可以看到不合规范的代码行前面有明显的提示：
![](http://alloyteam.github.io/CodeGuide/images/demo_1.png)

将光标移到该行，可以在状态栏中看到详细的错误信息：
![](http://alloyteam.github.io/CodeGuide/images/demo_2.png)

建议在修改这些错误之前，js文件用JsFormat格式化一下（ctrl+alt+f），css文件用CSScomb格式化一下（ctrl+shift+c），可以减少很多工作量。

### 3. 觉得不合理或者有遗漏的地方？
如果觉得有不合理或者遗漏的地方，请访问[这里](https://github.com/AlloyTeam/CodeGuide/issues/new)！

