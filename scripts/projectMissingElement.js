define(['jquery'], function($){
    var mInstance = null;
    var _Project = function(){
        console.group('_PROJECT MISSING ELEMENT');
            console.log(':\t', 'Reached');
           console.groupEnd(); 
    };
    _Project.prototype = {
         generateRandomArray:function(){},
         cloneAndRemoveOneElement:function(){},
         findMissingElement:function(){},
         printSolution:function($paramNode){
            $paramNode.html('Reached projectMissingElement');
         }
    };
    var _getInstance = function(){ // singleton, can be instantiated once
        if(!mInstance){
            mInstance = new _Project();
        }
        return mInstance;
    };

    return{Project:_getInstance}
});