"use strict";angular.module("app",["ui.router","ngCookies"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("show",{url:"/show/:id",templateUrl:"view/show.html",controller:"showCtrl"}).state("company",{url:"/company/:id",templateUrl:"view/company.html",controller:"showCtrl"}).state("search",{url:"/search",templateUrl:"view/search.html",controller:"searCtrl"}).state("me",{url:"/me",templateUrl:"view/me.html",controller:"meCtrl"}).state("login",{url:"/login",templateUrl:"view/login.html",controller:"loginCtrl"}).state("regist",{url:"/regist",templateUrl:"view/regist.html",controller:"registCtrl"}).state("deliver",{url:"/deliver",templateUrl:"view/deliver.html",controller:"deliverCtrl"}).state("collect",{url:"/collect",templateUrl:"view/collect.html",controller:"collectCtrl"}),e.otherwise("main")}]),angular.module("app").controller("collectCtrl",["$scope","$http","$cookies","$state",function(t,e,o,a){e({method:"get",url:"data/myFavorite.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.star="images/star-active.png",t.clickStar=function(){"images/star.png"==t.star?t.star="images/star-active.png":t.star="images/star.png"}}]),angular.module("app").controller("deliverCtrl",["$scope","$http","$cookies","$state",function(t,e,o,a){e({method:"get",url:"data/myPost.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!1,t.flag1=!0,t.flag2=!0,t.cal1={"border-bottom":"2px solid #12d5b5"},t.showAll=function(){e({method:"get",url:"data/myPost.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!1,t.flag1=!0,t.flag2=!0,t.cal1={"border-bottom":"2px solid #12d5b5"},t.cal2={"border-bottom":"0"},t.cal3={"border-bottom":"0"}},t.showInvite=function(){e({method:"get",url:"data/myPost.json",responseType:"json"}).then(function(e){t.data=e.data[0]},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!0,t.flag1=!1,t.flag2=!0,t.cal2={"border-bottom":"2px solid #12d5b5"},t.cal1={"border-bottom":"0"},t.cal3={"border-bottom":"0"}},t.showUnsuited=function(){e({method:"get",url:"data/myPost.json",responseType:"json"}).then(function(e){t.data=e.data[1]},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!0,t.flag1=!0,t.flag2=!1,t.cal3={"border-bottom":"2px solid #12d5b5"},t.cal2={"border-bottom":"0"},t.cal1={"border-bottom":"0"}}}]),angular.module("app").controller("loginCtrl",["$scope","$http","$cookies","$state",function(t,e,o,a){var l=o.getObject("register");t.phone=l?l.phone:"",t.checkLogin=function(){t.lophone==l.phone&&t.lopassword==l.password?(t.check="",a.go("main")):t.check="用户名或者密码错误"}}]),angular.module("app").controller("mainCtrl",["$scope","$http","$cookies",function(t,e,o){e({method:"get",url:"data/positionList.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)});var a=o.getObject("register");t.flag=!1,a?(t.flag=!0,t.phone="你好，"+a.phone):(t.phone="",t.flag=!1)}]),angular.module("app").controller("meCtrl",["$scope","$http","$cookies",function(t,e,o){var a=o.getObject("register");t.flag=!1,t.flag1=!0,a?(t.flag=!0,t.flag1=!1,t.phone=a.phone):(t.phone="",t.flag=!1,t.flag1=!0),e({method:"get",url:"data/login.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.exit=function(){o.remove("register")}}]),angular.module("app").controller("registCtrl",["$scope","$http","$interval","$cookies","$state",function(t,e,o,a,l){function r(){for(var t="",e=1;e<=4;e++){t+=parseInt(10*Math.random(e))}return t}t.flag1=!1,t.flag2=!1,t.checkRegistPhone=function(){/^1[\d]{10}$/.test(t.rephone)?(t.checkphone="✅",t.flag1=!0):(t.checkphone="❌",t.flag1=!1)},t.checkRegistPassword=function(){/^[\w]{6,12}$/.test(t.repassword)?(t.checkpassword="✅",t.flag2=!0):(t.checkpassword="❌",t.flag2=!1)},t.dis=!1,t.sendtxt="短信验证码",t.sendCode=function(){function e(){0===--t.sendtxt&&(o.cancel(a),t.sendtxt="重新发送")}t.sendtxt=5;var a=o(e,1e3);t.code=r()},t.checkRegist=function(){console.log(22),t.flag1&&t.flag2&&(console.log(33),a.putObject("register",{phone:t.rephone,password:t.repassword}))}}]),angular.module("app").controller("searCtrl",["$scope","$http",function(t,e){e({method:"get",url:"data/positionList.json",responseType:"json"}).then(function(e){t.data=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!0,t.flag1=!0,t.showCity=function(){e({method:"get",url:"data/city.json",responseType:"json"}).then(function(e){t.ss=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!t.flag,t.flag1=!t.flag1,t.cal1={"border-bottom":"2px solid #12d5b5"}},t.showSalary=function(){e({method:"get",url:"data/salary.json",responseType:"json"}).then(function(e){t.ss=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!t.flag,t.flag1=!t.flag1,t.cal2={"border-bottom":"2px solid #12d5b5"}},t.showScale=function(){e({method:"get",url:"data/scale.json",responseType:"json"}).then(function(e){t.ss=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag=!t.flag,t.flag1=!t.flag1,t.cal3={"border-bottom":"2px solid #12d5b5"}},t.alert=function(){t.flag=!0,t.flag1=!0,t.cal1={"border-bottom":"0"},t.cal2={"border-bottom":"0"},t.cal3={"border-bottom":"0"}}}]),angular.module("app").controller("showCtrl",["$scope","$http","$state","$cookies",function(t,e,o,a){e({method:"get",url:"data/position.json?="+o.params.id,responseType:"json"}).then(function(e){t.position=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),e({method:"get",url:"data/company.json?="+o.params.id,responseType:"json"}).then(function(e){t.company=e.data},function(t){console.log("请求失败："+t.status+","+t.statusText)}),t.flag1=!0,t.flag2=!1,t.doChange1=function(){t.flag1=!0,t.flag2=!1,t.btn1={color:"white","background-color":"#12d5b5"},t.btn2={color:"#000","background-color":"#def8f5"}},t.doChange2=function(){t.flag1=!1,t.flag2=!0,t.btn2={color:"white","background-color":"#12d5b5"},t.btn1={color:"#000","background-color":"#def8f5"}},t.flag11=!0;var l=a.getObject("register");t.flag11=!l,t.star="images/star.png",t.toujianli="投个简历",t.clickStar=function(){"images/star.png"==t.star?(t.star="images/star-active.png",t.toujianli="已投递"):(t.star="images/star.png",t.toujianli="投个简历")}}]),angular.module("app").directive("appCollectHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/collect-head.html",link:function(t){t.back=function(){window.history.back()}}}}]).directive("appCollect",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/collect-content.html"}}]),angular.module("app").directive("appCompanyHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/company-head.html",link:function(t){t.back=function(){window.history.back()}}}}]).directive("appCompanyClassify",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/company-classify.html"}}]),angular.module("app").directive("appList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/contain.html"}}]),angular.module("app").directive("appDeliverHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/deliver-header.html",link:function(t){t.back=function(){window.history.back()}}}}]).directive("appDeliverSearch",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/deliver-search.html"}}]).directive("appDeliverContent",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/deliver-content.html"}}]),angular.module("app").directive("appFooter",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/footer.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appLogin",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/login-button.html",link:function(t){}}}]),angular.module("app").directive("appLoginmainhead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/loginmain-head.html",link:function(t){}}}]),angular.module("app").directive("appMe",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/me-login.html"}}]),angular.module("app").directive("appPositionContent",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positioncontent.html"}}]).directive("appPositionInfo",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/position-info.html"}}]),angular.module("app").directive("appPositionHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionhead.html",link:function(t){t.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionFooter",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionfooter.html"}}]),angular.module("app").directive("appRegist",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/regist-button.html",link:function(t){}}}]),angular.module("app").directive("appSearchHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/search-head.html"}}]).directive("appSearchSearch",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/search-search.html"}}]).directive("appSearchCity",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/search-city.html"}}]).directive("appSearchAlert",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/alert-bg.html"}}]);