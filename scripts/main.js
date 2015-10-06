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
            var selectorSolution = '#' + id + 'Solution';

            switch(id){
                case 'missingElement':
                    var projectMissingElement = new projMissingElement.Project();
                    $node = $(selectorSolution);
                    projectMissingElement.printSolution($node);
                    break;
                case 'findAllInstances':
                    var projectFindAll = new projFindAll.Project();
                    $node = $(selectorSolution);
                    projectFindAll.printSolution($node);                    
                    break;
                case 'getElementsByClassName':
                    var projectGetElement = new projGetElement.Project();
                    $node = $(selectorSolution);
                    projectGetElement.printSolution($node);                                        
                    break;
                default:
                    /*do nothing, node clicked that was not defined in switch*/            
            }
            
        },
        setListeners:function(paramSelector){ // single place to define our listeners
            var selector = paramSelector;
            var nodes = $(selector);
            nodes.on('click', function(e){
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