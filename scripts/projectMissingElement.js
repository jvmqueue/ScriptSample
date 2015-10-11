define(['jquery'], function($){
    var w = window, d = document;
    var mInstance = null;


    var util = {
        fisherYates:function(paramArray){
            var arry = paramArray;
            var count = arry.length, randomnumber, temp;

            while(count){
                randomnumber = Math.random() * count-- | 0;
                temp = arry[count]; // this val
                arry[count] = arry[randomnumber]; // replace this val with random
                arry[randomnumber] = temp; // swap vals with initial, before replace
            }
        }
    }; // End util

    var _Project = function(){
        this.arry = null;
        this.arryClone = null;
        this.arryElementsRemoved = null;
    };
    _Project.prototype = {
        generateRandomArray:function(paramLength){
            this.arry = new Array();
            var len = paramLength;
            for(var i = 0; i < len; i++){
                this.arry.push(i);
            }
            util.fisherYates(this.arry); // we do not need to return instance objects     
        },
        cloneAndRemoveOneElement:function(paramIntRemoveElementAt){
            this.arryClone = this.arry.slice(); // clone
            this.arry.splice(paramIntRemoveElementAt, 1); // remove one element at paramIntRemoveElementAt
        },
        findMissingElement:function(){
            var strArray = this.arry.join(); // convert to string for regExp use
            var strElemnentInClone = null;
            var regex = null;
            var strMatchOnArray = null;

            this.arryElementsRemoved = new Array(); // empty the array

            for(var i = 0, len = this.arryClone.length; i < len; i++){
                strElemnentInClone = this.arryClone[i];
                regex = new RegExp(strElemnentInClone);
                strMatchOnArray = strArray.match(regex);
                if(!strMatchOnArray){
                    this.arryElementsRemoved.push(strElemnentInClone);
                }
            }
        },
        printSolution:function($paramNode){
            
            var $nodeExist = $paramNode;
            var frag = d.createDocumentFragment();
            var nodeTexts = new Array();
            var nodeNew = null;            

            $nodeExist.html('Solution: Missing Element');
            
            this.generateRandomArray(7);
            this.cloneAndRemoveOneElement(2);
            this.findMissingElement();

            nodeTexts[0] = d.createTextNode('Initial Array: ' + this.arryClone.join()); // optimization: simple, so, do not need jQuery
            nodeTexts[1] = d.createTextNode('Array Element Removed: ' + this.arry.join()); // optimization: simple, so, do not need jQuery
            nodeTexts[2] = d.createTextNode('Missing Elements: ' + this.arryElementsRemoved.join()); // optimization: simple, so, do not need jQuery

            for(var i = 0, len = nodeTexts.length; i < len; i++){
                nodeNew = d.createElement('p');
                nodeNew.appendChild(nodeTexts[i]);
                frag.appendChild(nodeNew);
            }

             $nodeExist.append(frag);
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