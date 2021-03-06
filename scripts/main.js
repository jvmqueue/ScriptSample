require(['jquery', 
    'projectMissingElement', 
    'projectFindAllInstances', 
    'projectgetElementsByClassName'], 
function($, 
    projMissingElement, 
    projFindAll, 
    projGetElement){

    var w = window, d = document;


    var controller = {
        getProject:function(e){ // instantiate relative to node clicked
            var target = e.target;
            var id = target.getAttribute('id');
            var node = null;
            var selectorSolution = '#' + id + 'Solution'; // solution printed to this selector
            var projectInstance = null;

            $node = $(selectorSolution);

            switch(id){
                case 'missingElement':
                    projectInstance = new projMissingElement.Project(); // singleton, is instantiated once, and once only
                    break;
                case 'findAllInstances':
                    projectInstance = new projFindAll.Project(); // singleton, is instantiated once, and once only
                    break;
                case 'getElementsByClassName':
                    projectInstance = new projGetElement.Project(); // singleton, is instantiated once, and once only
                    break;
                default:
                    /*do nothing, node clicked that was not defined in switch*/            
            }

            projectInstance.printSolution($node);
        },
        setListeners:function(paramSelector){ // single place to define our listeners
            var selector = paramSelector;
            var $nodes = $(selector);
            $nodes.on('click', function(e){
                controller.getProject(e);
            });

        }
    };

    var interval = w.setInterval(function(){ // optimization: we do not need jQuery to wait for DOM
        if(d.getElementsByTagName('div').length > 0){
            w.clearInterval(interval);
            controller.setListeners('.button');            
        }
    }, 33);

});