alertify.defaults = {
    notifier:{
    // auto-dismiss wait time (in seconds)  
        delay:4,
    // default position
        position:'top-center',
    // adds a close button to notifier messages
        closeButton: false,
    },

    // language resources 
    glossary:{
        // ok button text
        ok: 'Continue',
        // cancel button text
        cancel: 'Cancel'            
    },

    // theme settings
    theme:{
        // class name attached to prompt dialog input textbox.
        input:'ajs-input',
        // class name attached to ok button
        ok:'ajs-ok',
        // class name attached to cancel button 
        cancel:'ajs-cancel'
    },
    hooks:{
        // invoked before initializing any dialog
        preinit:function(instance){},
        // invoked after initializing any dialog
        postinit:function(instance){},
    },    
};
