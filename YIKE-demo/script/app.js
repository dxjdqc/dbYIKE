//1定义数据
var YIKE = angular.module("YIKEApp",["ngRoute"]);//依赖路由


// 3.事件添加
// .因为头部和导航部分都需要同样的点击事件，所以设为全局，用$rootScope服务
/*一个AngularJS的应用（App）在启动时会自动创建一个根作用域$rootScope，
这个根作用域在整个应用范围（ng-app所在标签以内）都是可以被访问到的。*/
// 用run方法运行这个服务
YIKE.run(["$rootScope", function($rootScope) {
	$rootScope.loaded = false;
	// 为需要事件的元素添加collapse类名
	$rootScope.collapsed = false;
	$rootScope.toggle = function() {
		// 当点击的时候改为true
		// $rootScope.collapsed = true;

		// 判断,如果为true就改为false，则相反
		$rootScope.collapsed =!$rootScope.collapsed;
		// 获取dd
		var navs = document.querySelectorAll(".navs dd");

		// 需判断是tansform:translate(0%)还是translate(-100%)
			// 如果添加了这个类名，表示已经动了，此时就让每个小导航从左平移到右边
		if($rootScope.collapsed) {
			for(var i = 0; i<navs.length;i++) {
				navs[i].style.transform = "translate(0)";
				navs[i].style.transitionDuration = (i+1)*0.2 + "s";
				navs[i].style.transitionDelay = "0.5s";
			}
		} else {
			for(var i = 0;i<navs.length;i++) {
				navs[i].style.transform = "translate(-100%)";
				navs[i].style.transitionDuration = (navs.length-1)*0.2 + "s";
				navs[i].style.transitionDelay = "0.5s";
			}
		}
	}
}])

// 4.配置路由
YIKE.config(["$routeProvider",function($routeProvider) {
	// tody 今日一刻
	$routeProvider.when("/today", {
		// 视图关联控制器
		controller:"TodayController",
		templateUrl:"views/today.html"
		// 往期内容
	}).when("/older", {
		controller:"olderController",
		templateUrl:"views/older.html"
	}).when("/author", {
		controller:"autherController",
		templateUrl:"views/author.html"
	}).when("/category", {

		templateUrl:"views/category.html"
	}).when("/favourite", {	
		templateUrl:"views/favourite.html"
	}).when("/setting", {
		templateUrl:"views/settings.html"

		// 重定向
	}).otherwise("/today", {
		redirect:"/today"
	})
}])
// 2.导航控制器
YIKE.controller("NavsController",["$scope",function($scope) {
	$scope.navs = [//为锚链接，
		{"text":"今日一刻","link":"#/today","icon":"icon-home"},
		{"text":"往期内容","link":"#/older","icon":"icon-file-empty"},
		{"text":"热门作者","link":"#/author","icon":"icon-pencil"},
		{"text":"栏目浏览","link":"#/category","icon":"icon-menu"},
		{"text":"我的喜欢","link":"#/favourite","icon":"icon-heart"},
		{"text":"设置","link":"#/setting","icon":"icon-cog"}		
	]
}])

//今日一刻 5.通过控制器关联模型
YIKE.controller("TodayController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope) {

		$rootScope.title = "今日一刻";
			$rootScope.loaded = false;
		var angularDate = $filter("date");//得到一个函数
		// 规定获取日期的格式，所以用到过滤器,把currentDat传到http请求里的params
		var currentDate = angularDate( new Date(),"yyyy-MM-dd")


	$http({
		// 让php去向豆瓣网请求数据
		url:"api/today.php",
		method:"get",
		// 给PHP换个参数，PHP接收后拿着
		params:{

			currentDate:currentDate
		}

	}).success( function( data ) {
		// 加载完成
		$rootScope.loaded = true;
		// 把获取的数据（是个数组）给左边
		$scope.posts = data.posts;
		// 拿到日期，传到相应的html页面上
		$scope.date = data.date;
	})
}])

// 6.往期内容
YIKE.controller("olderController",["$scope","$http","$rootScope","$filter", function($scope,$http,$rootScope,$filter) {
	$rootScope.title = "往期内容";
	$rootScope.loaded = false;
	$http({
		url:"api/older.php",
		method:"get",
		params:{
			day:-5
		}
		}).success(function(data) {
			console.log(data);
			// 加载完成
		$rootScope.loaded = true;
		// 把获取的数据（是个数组）给左边
		$scope.posts = data.posts;
		// 拿到日期，传到相应的html页面上
		$scope.date = data.date;
	})
}])

// 7.热门作者
YIKE.controller("autherController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope) {
	$rootScope.title = "热门作者";
	$rootScope.loaded = false;
	$http({
		url:"api/author.php",
		method:"get"
	}).success( function( data) {
		console.log(data);
		$rootScope.loaded = true;
		$scope.allAuthor = data.allAuthor.authors
		$scope.remenAuthor = data.remenAuthor.authors;
	})
}])

// 8.
