'use strict'

angular.module('autoJekyll')

.controller('MainCtrl', function(Restangular, $base64){
    var self = this; 
//   Default my model to having my signature
    this.template = $base64.decode('IyMjI0xvZ2FuIE91dCE=');
    
// This defaults the form to empty
    this.newPost = {
        fileName: '',
        content:  this.template,
        cMessage: '',
        month: 1,
        day: 1,
        year: '2015'
    }
   

//https://api.github.com/repos/loganarnett/LoganArnett.github.io/contents/_posts/2014-09-23-The-Iron-Blog-Has-Landed.md
//    customPUT()
    this.gitPub = function(post){
        this.postMonth = post.month.toString()
        this.postDay = post.day.toString()
//        day = date.length == 1 ? "0" + date : date;
      if(this.postMonth.length == 1){
          this.postMonth = '0' + this.postMonth;
          console.log(this.postMonth)
      }
      if(this.postDay.length == 1){
          this.postDay = '0' + this.postDay;
          console.log(this.postDay)
      }
      this.fileName = post.fileName.replace(/ /g, '-');
      this.datedFile = this.postYear + '-' + this.postMonth + '-' + this.postDay + '-' + this.fileName + '.md';
      this.cMessage = post.cMessage;
      this.encoded = $base64.encode(post.content)
      console.log(this.encoded)
      
//      Restangular.one('_posts/').customPUT( {"content": this.encoded, "message": this.cMessage}, this.datedFile, {}, {"Authorization": 'token 6c5e78e3ac7a7571b0f1f32d07034a97434b8b88'} )
      
      return this.newPost = {
        fileName: '',
        content: this.template,
        cMessage: '',
        postDate: ''
    };
      
    }
    
// Making the date selection less error prone
    this.month = 12;
    this.day = 31;
    this.getNumber = function(num) {
        return new Array(num);   
    }
    
});
