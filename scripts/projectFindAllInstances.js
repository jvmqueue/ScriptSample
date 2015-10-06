define([], function(){
    var mInstance = null;
    var _Project = function(){
        console.group('_PROJECT FIND ALL INSTANCES');
            console.log(':\t', 'Reached');
           console.groupEnd(); 
    };
    _Project.prototype = {
         generateLongParagraph:function(){},
         findInstances:function(){},
         most:function(){},
         printSolution:function($paramNode){
            $paramNode.html('Reached find all instances');
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