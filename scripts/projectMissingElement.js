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
            util.fisherYates(this.arry);            
        },
        cloneAndRemoveOneElement:function(paramIntRemoveElementAt){
            this.arryClone = this.arry.slice();
            this.arry.splice(paramIntRemoveElementAt, 1);
        },
        findMissingElement:function(){
            this.arryElementsRemoved = new Array();
            var strArray = this.arry.join();

            for(var i = 0, len = this.arryClone.length; i < len; i++){
                var strElemnentInClone = this.arryClone[i];
                var regex = new RegExp(strElemnentInClone);
                var strMatchOnArray = strArray.match(regex);
                if(!strMatchOnArray){
                    this.arryElementsRemoved.push(strElemnentInClone);
                }
            }
        },
        printSolution:function($paramNode){
            
            var frag = d.createDocumentFragment();
            var nodeTexts = new Array();
            var nodeNew = null;            

            $paramNode.html('Solution: Missing Element');
            
            this.generateRandomArray(7);
            this.cloneAndRemoveOneElement(2);
            this.findMissingElement();

            nodeTexts[0] = d.createTextNode('Initial Array: ' + this.arryClone.join());
            nodeTexts[1] = d.createTextNode('Array Element Removed: ' + this.arry.join());
            nodeTexts[2] = d.createTextNode('Missing Elements: ' + this.arryElementsRemoved.join());

            for(var i = 0, len = nodeTexts.length; i < len; i++){
                nodeNew = d.createElement('p');
                nodeNew.appendChild(nodeTexts[i]);
                frag.appendChild(nodeNew);
            }

             $paramNode.append(frag);
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