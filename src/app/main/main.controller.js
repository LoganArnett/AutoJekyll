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
   
    this.gitPub = function(post){
//        Convert numbers returned into strings
        this.postMonth = post.month.toString();
        this.postDay = post.day.toString();
        this.postYear = post.year.toString();
        
//      Check for proper date formats for Month and Day
      if(this.postMonth.length == 1){
          this.postMonth = '0' + this.postMonth;
      }
      if(this.postDay.length == 1){
          this.postDay = '0' + this.postDay;
      }
//        Replace all spaces in the users title with dashes
      this.fileName = post.fileName.replace(/ /g, '-');
        
//        Created the properly structure markdown file name for the post
      this.datedFile = this.postYear + '-' + this.postMonth + '-' + this.postDay + '-' + this.fileName + '.md';
        
//        Grab the commit message    
      this.cMessage = post.cMessage;
        
//        Base64 encode the actual post content as required by Github
      this.encoded = $base64.encode(post.content)

//        Using Restangular to create a customPUT with the required params requested by Github
//      Restangular.one('_posts/').customPUT( {"content": this.encoded, "message": this.cMessage}, this.datedFile, {}, {"Authorization": 'token 6c5e78e3ac7a7571b0f1f32d07034a97434b8b88'} )
      
//      Reset the newPost object back to its original blank state upon submission of a post
      return self.newPost = {
        fileName: '',
        content:  self.template,
        cMessage: '',
        month: 1,
        day: 1,
        year: '2015'
    }
      
    }//END This.gitPub Function
    
// Making the date selection less error prone
    this.month = 12;
    this.day = 31;
    this.getNumber = function(num) {
        return new Array(num);   
    }
    
});
