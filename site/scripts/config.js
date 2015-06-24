requirejs.config({
    paths:{ // load when page loads
        "jquery":["base/jquery/jquery.min"],
        "bootstrap":["scripts/base/bootstrap/dist/js/bootstrap"]
    },
    shim:{
        'jquery':{
            exports:'$'
        },
        'bootstrap':{
            deps:['jquery']
        },
        'main':{ // load only when a module requires it
            deps:['util']
        }
    },
    deps:['main'] // where our program begins execution
});