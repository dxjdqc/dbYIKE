// 1.定义应用，初始化app，当做依赖传进去路由模块，模块名称为ngRoute
var YIKE = angular.module( "YIKEApp",[] );

//2.通过config方法实现对模块的配置 provider：用来执行与对应服务相同的功能或对其进行配置。

	// 配置路由 提供两个方法匹配路由，when  otherwise

	 /*when方法：需要两个参数，可被多次调用
	 第1个参数:字符串，代表当前URL中的hash值
	 第2个参数:对象，配置当前路由的参数，如视图、控制器等
				a、template 字符串形式的视图模板
				b、templateUrl 引入外部视图模板
				c、controller 视图模板所属的控制器
				d、redirectTo跳转到其它路由
	 */

	// otherwise方法：作为when方法的补充，只需一个参数

		 // 3.today 今日一刻
		 // 视图模板所属的控制器

		// 引入外部视图模板

		//往期内容

		//热门作者

		//栏目预览

		//我的爱好

		 //设置

		// redirectTo跳转到其它路由


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*$rootScope 这个$rootScope  $scope 模型数据. 我在$rootScope 里面绑定了数据，
我在页面的任何地方都可以使用
* 我们需要在$rootScope 上面去绑定这个事件。我就需要去运行这个服务.
* 用run 方法运行这个服务.
* */
YIKE.run(["$rootScope",function($rootScope) {

 //绑定的全局的数据
		// navs 和header添加collapse类名
		// false为不给添加
		$rootScope.collapsed = false;
		// 点击事件，点击时添加类名，让其过渡
		$rootScope.toggle = function() {
// $rootScope.collapsed = true;  进行判断，如为false就改为true，否则相反
			$rootScope.collapsed = !$rootScope.collapsed;
			var navs = document.querySelectorAll(".navs dd");	

		// 判断是 transform:translate(0%) 还是 translate(-100%)
			if($rootScope.collapsed) {
				for(var i = 0; i<navs.length;i++){
					navs[i].style.transform = "translate(0)";
					navs[i].style.transitionDuration =  (i+1) *0.2 + "s";
					navs[i].style.transitionDelay = "0.5s";
				}
			} else {
				for(var i = 0; i< navs.length; i++) {
					navs[i].style.tranform = "translate(-100%)";
					navs[i].style.transitionDuration = ( navs.length - i ) *0.2 + "s";
					navs[i].style.transitionDelay = "0.5s";
				}
			}
		}
}])
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 侧边导航

	// link为：锚链接的页面

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 通过控制器关联模型的数据
// 在控制器中使用$filter格式化数据    $http用于向服务端发起异步请求

		// 内置服务用来调用过滤器

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// $http用于向服务端发起异步请求
	
		 //地址
			 //提交方式
			
				  //2017-03-29s  后台接收到的数据  $date=$_GET["currentDate"];
		//也可以用来发送参数

			// 下面函数的参数：data 服务端返回的数据.  config 配置,在$http() 方法里面的设置的内容.
			// 				status 状态码   responseHeader 响应头
	