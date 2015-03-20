"use strict";angular.module("autoJekyll",["ngAnimate","ngSanitize","restangular","ui.router","ui.bootstrap","yaru22.md","base64","firebase"]).constant("Fire",{Base:{Url:"https://randominfo.firebaseio.com"}}).config(["$stateProvider","$urlRouterProvider","RestangularProvider",function(t,e,a){a.setBaseUrl("https://api.github.com/repos/loganarnett/LoganArnett.github.io/contents/"),t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl as app"}).state("newpost",{url:"/new",templateUrl:"app/newpost/newpost.html",controller:"MainCtrl as app"}),e.otherwise("/")}]),angular.module("autoJekyll").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),angular.module("autoJekyll").controller("MainCtrl",["$firebaseObject","Restangular","$base64","Fire",function(t,e,a,o){var s=this,n=new Firebase(o.Base.Url);this.gh=t(n),this.template=a.decode("IyMjI0xvZ2FuIE91dCE="),this.newPost={fileName:"",content:this.template,cMessage:"",month:1,day:1,year:"2015"},this.gitPub=function(t){return this.postMonth=t.month.toString(),this.postDay=t.day.toString(),this.postYear=t.year.toString(),1==this.postMonth.length&&(this.postMonth="0"+this.postMonth),1==this.postDay.length&&(this.postDay="0"+this.postDay),this.fileName=t.fileName.replace(/ /g,"-"),this.datedFile=this.postYear+"-"+this.postMonth+"-"+this.postDay+"-"+this.fileName+".md",this.cMessage=t.cMessage,this.encoded=a.encode(t.content),e.one("_posts/").customPUT({content:this.encoded,message:this.cMessage},this.datedFile,{},{Authorization:"token "+s.gh.GH}),s.newPost={fileName:"",content:s.template,cMessage:"",month:1,day:1,year:"2015"}},this.month=12,this.day=31,this.getNumber=function(t){return new Array(t)}}]),angular.module("autoJekyll").run(["$templateCache",function(t){t.put("app/newpost/newpost.html",'<div class="container-fluid main"><div ng-include="\'components/navbar/navbar.html\'"></div><section id="addPost" class="col-xs-12 col-md-6"><div id="Post"><h2>New Post</h2><form ng-submit="app.gitPub(app.newPost)"><section class="date-fields row"><div class="col-xs-4"><label>Year</label><select ng-model="app.newPost.year"><option>2015</option></select></div><div class="col-xs-4"><label>Month</label><select ng-model="app.newPost.month"><option ng-repeat="num in app.getNumber(app.month) track by $index">{{$index+1}}</option></select></div><div class="col-xs-4"><label>Day</label><select ng-model="app.newPost.day"><option ng-repeat="num in app.getNumber(app.day) track by $index">{{$index+1}}</option></select></div><br><br></section><div class="post-title col-xs-12"><label>Post Title</label><br><input type="text" ng-model="app.newPost.fileName" required=""><br></div><div class="commit-message col-xs-12"><label>Commit Message</label><br><input type="text" ng-model="app.newPost.cMessage" required=""><br></div><br><div class="post-content"><label>Blog It in <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a></label><br><textarea name="newPost" id="newPost" wrap="off" ng-model="app.newPost.content" style="display:block;" required=""></textarea></div><div class="publish-btn col-xs-12"><button class="send btn btn-primary btn-lg">Publish</button></div></form></div></section><section class="preview col-xs-12 col-md-6"><h2>Live Preview of Markdown</h2><div id="markdown"><md ng-model="app.newPost.content"></md></div></section></div>'),t.put("app/main/main.html",'<div class="container-fluid landing"><div ng-include="\'components/navbar/navbar.html\'"></div><header class="jumbotron text-center"><h1>AutoJekyll</h1><p class="lead"><img class="logo" src="assets/images/MeSP.jpg" alt="AutoJekyll"><br>Automate your Jekyll Workflow</p><a ui-sref="newpost" class="btn btn-success btn-lg fa fa-plus">Add New Post</a></header><section class="description"><h2>What is AutoJekyll</h2><p class="main-para">AutoJekyll is a tool developed by a graduate of <a href="https://theironyard.com/locations/orlando">The Iron Yard Orlando\'s</a> Front End Engineering program. It is an AngularJS web app that allows the user to setup a nice and easy workflow for their <a href="https://jekyllrb.com">Jekyll</a> blog that is hosted through <a href="https://github.com">Github</a>. Well technically it can be wired up for a number of different uses and applications but that was the original idea.</p><p class="main-para">The Add A New Post screen allows the user to type in posts in <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">markdown</a> syntax and watch a live preview of their post side by side. This is a great way to begin getting comfortable with typing in markdown because you get real time feedback.</p><p class="main-para">After you have completed your post to your own satisfaction you can make sure you have filled in the proper date for the post, the post title, and the commit message that you would like to appear in your Github repo for this added post. No more having to go into your IDE and terminal just to type, save, `git status`, `git add`, `git commit`, and `git push` back up to the master branch on github. AutoJekyll does all of this work for you straight from the browser through your gh-pages USERNAME.github.io site.</p></section></div>'),t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/loganarnett/AutoJekyll"><span class="fa fa-home"></span> AutoJekyll</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="https://github.com/LoganArnett/AutoJekyll/blob/master/README.md">Docs</a></li><li><a ng-href="#">Contact</a></li></ul></div></div></nav>')}]);
