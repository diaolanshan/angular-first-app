### Angular 01



#### 单页应用(Single Page Application/SPA) vs 多页应用

##### 单页应用

- 项目中只有一个完整的html页面。index.html。
- 本质上div转换，可以增加更好的效果。
- 异步调用。

#####多页应用

- 很过个html的文件。

- 浏览器负责页面的转行，程序员无法控制样式。

- 页面的切换。

  

#### Angular vs AngularJS

Angular >= 2.0  -> AngularJS

Angular <= 2.0 -> Angular.

AngularJS的语言是 javascript

Angular是TypeScript 

Angular继承了AngularJS的所有的特性。

Angular 8.0.x



#### Angular vs React vs Vue

##### Angular 

开发方： Google

上手难度： 重量级的框架， 上手比较困难， 文档有中文。https://angular.cn/ 

手机APP: Ionic mobile的原生的app。

##### React

开发方： Facebook

上手难度： 上手苦难， 中文文档不够健全。

手机app:  React Native(RN)

##### Vue

开发方： 个人（尤雨溪）

上手难度： 上手容易， 中文文档。

手机APP： 不支持



#### 环境搭建

nodejs 版本大于 9.x

https://nodejs.org/en/

安装npm

https://www.npmjs.com/package/download

安装 AngularCLI

npm install -g @angular/cli

验证：

```bash
ng --version
```

淘宝的npm仓库：

http://npm.taobao.org/

Augury for Firefox or Chrome:

https://augury.rangle.io/

创建Angular的应用

```
ng new first-app
```

执行app

```
ng serve [--open]
```



build

```
ng build [--prod]
```







