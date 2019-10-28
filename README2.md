##### 创建application

```
#创建
ng new 

ng serve [--open]
```

##### 部署

```
ng build [--prod]
```

dist/ 下内容copy到tomcat， 并且更改index.html

```
 #<base href="/">
 <base href="./">
```



#### Component/组件

组件来负责控制或者是显示屏幕中的一部分， 和template（html）以及style（css）来定义视图的外观和行为。



为什么使用component

1. 开发/维护简单。
2. 可以重用。



##### 创建组件

```
ng generate component componentName
ng g c componentName
```

selector: 组件选择器名称

templateUrl: 模板文件

styleUrls： 样式文件路径



Function 定义

```
  clicked(language: string):void{
    console.log(language)
  }
```



##### 数据绑定

单向数据绑定

{{language}}

事件绑定

```
<div (click)="clicked(language)">{{language}}</div>
```

双向数据绑定



#### class定义

```
ng generate class learn
```

```
export class Learn {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}
```





