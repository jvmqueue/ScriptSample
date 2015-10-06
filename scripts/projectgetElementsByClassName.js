define([], function(){
    var mInstance = null;
    var _Project = function(){
        console.group('_PROJECT GET ELEMENTS');
            console.log(':\t', 'Reached');
           console.groupEnd(); 
    };
    _Project.prototype = {
        allElements:function(){},
        getElementsByClassName:function($paramNode){
            $paramNode.html('Reached project get element');
        },
        printSolution:function($paramNode){
            $paramNode.html('Reached get elements');
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