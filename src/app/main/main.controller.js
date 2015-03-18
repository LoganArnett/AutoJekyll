'use strict'

angular.module('autoJekyll')

.controller('MainCtrl', function(Restangular){
    var self = this; 
    
 
// This defaults the form to empty
    this.newPost = ''

//    customPUT()
    this.gitPub = function(post){
      console.log(post)
    }
})
