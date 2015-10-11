define([], function(){
    var w = window, d = document;
    var mInstance = null;

    var util = {
        appendToDom:function(options){ // Normally defined in a util library, but keeping code in single location for exam purposes
            frag = d.createDocumentFragment();
            var nodeText = d.createTextNode(options.paramStr);
            var nodeNew = d.createElement(options.paramNodeName);
            nodeNew.setAttribute('class', 'jsBold');
            nodeNew.appendChild(nodeText);
            frag.appendChild(nodeNew);
            options.$paramNodeExist.append(frag);
        }
    }; // End util

    var _Project = function(){
        this.STR_LABEL = 'Solution: Get Elements By Class Name';
    };
    _Project.prototype = {
        allElements:function(){
            var strSelector = '*';
            var $nodesExist = $(strSelector);
            return $nodesExist;
        },
        getElementsByClassName:function(allElements, element, className){
            var strSelector = allElements + ' ' + element + ' ' + className;
            var $nodesExist = $(strSelector); // using jQuery shortens code complexity here
            return $nodesExist;
        },        
        printSolution:function($paramNode){
            var $nodeExist = $paramNode;
            var strNodeHierarchy = 'div --> ol --> .listItem';
            var $nodesExist = this.getElementsByClassName('div', 'ol', '.listItem'); 
            var $nodesAllExist = this.allElements();            
            var intNodesExistLength = $nodesExist.length;
            var intNodesAllLength = $nodesAllExist.length;
            
            $nodeExist.html(this.STR_LABEL);
            util.appendToDom({paramStr:'Number of all nodes in ' + strNodeHierarchy + ': ' + intNodesExistLength, paramNodeName:'p', $paramNodeExist:$nodeExist}); 
            util.appendToDom({paramStr:'Number of all nodes: ' + intNodesAllLength, paramNodeName:'p', $paramNodeExist:$nodeExist}); 
        }                      
    };
    var _getInstance = function(){ // optimization: singleton, can be instantiated once
        if(!mInstance){
            mInstance = new _Project();
        }
        return mInstance;
    };

    return{Project:_getInstance}
});