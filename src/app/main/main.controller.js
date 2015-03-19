'use strict'

angular.module('autoJekyll')

.controller('MainCtrl', function(Restangular, $base64){
    var self = this; 
    
//    this.postIt = Restangular.one('_posts');
 
// This defaults the form to empty
    this.newPost = {
        fileName: '',
        content: '',
        cMessage: '',
        postDate: ''
    }


//https://api.github.com/repos/loganarnett/LoganArnett.github.io/contents/_posts/2014-09-23-The-Iron-Blog-Has-Landed.md
//    customPUT()
    this.gitPub = function(post){
      this.fileName = post.fileName.replace(/ /g, '-');
      this.datedFile = post.postDate + '-' + this.fileName + '.md';
      this.cMessage = post.cMessage;
      this.encoded = $base64.encode(post.content)
      console.log(self.postIt)
      
//      Restangular.one('_posts/').customPUT( {"content": this.encoded, "message": this.cMessage}, this.datedFile, {}, {"Authorization": 'token 6c5e78e3ac7a7571b0f1f32d07034a97434b8b88'} )
      
      return this.newPost = {
        fileName: '',
        content: '',
        cMessage: '',
        postDate: ''
    };
      
    }
});
