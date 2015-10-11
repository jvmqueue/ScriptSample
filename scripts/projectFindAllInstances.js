define([], function(){
    var w = window, d = document;
    var mInstance = null;
    var _Project = function(){
        this.paragraph = null;
    };

    var util = {
        appendToDom:function(options){
            frag = d.createDocumentFragment();
            var nodeText = d.createTextNode(options.paramStr);
            var nodeNew = d.createElement(options.paramNodeName);
            nodeNew.setAttribute('class', 'jsBold');
            nodeNew.appendChild(nodeText);
            frag.appendChild(nodeNew);
            options.$paramNodeExist.append(frag);
        }
    }; // End util

    _Project.prototype = {
         generateLongParagraph:function(){
            this.paragraph = 'The oldest and, and classical Greek and Latin writing had little or no space between words, and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common.';
            var frag = d.createDocumentFragment();            
            var nodeText = d.createTextNode(this.paragraph);
            var nodeNew = d.createElement('div');
            
            nodeNew.appendChild(nodeText);
            frag.appendChild(nodeNew);
            return frag;
         },
         findInstances:function(paramWordToFind){
            var strWordToFind = paramWordToFind;
            var regEx = new RegExp('(\\s'+ strWordToFind +'\\s)|(\\s'+ strWordToFind +',)', 'ig');
            var intNumMatches = this.paragraph.match(regEx).length;
            return {intNumOfMatches:intNumMatches, strWordMatched:strWordToFind};
         },
         most:function(){},
         printSolution:function($paramNode){
            var $nodeExist = $paramNode;
            var frag = this.generateLongParagraph();
            $nodeExist.html('Solution: Find All Instances');
            $nodeExist.append(frag);
            var objMatches = this.findInstances('and');
            var strText = 'Found the word "' + objMatches.strWordMatched + '" in paragraph ' + objMatches.intNumOfMatches + ' times';
            util.appendToDom({paramStr:strText, paramNodeName:'p', $paramNodeExist:$nodeExist});    
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