/*
 *  Document   : base_ui_activity.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Activity Page
 */

var BaseUIActivity = function() {
    // Randomize progress bars values
    var barsRandomize = function(){
        jQuery('.js-bar-randomize').on('click', function(){
            jQuery(this)
                .parents('.block')
                .find('.progress-bar')
                .each(function() {
                    var $this   = jQuery(this);
                    var $random = Math.floor((Math.random() * 91) + 10)  + '%';

                    $this.css('width', $random);

                    if ( ! $this.parent().hasClass('progress-mini')) {
                        $this.html($random);
                    }
                });
            });
    };

    // SweetAlert, for more examples you can check out https://github.com/limonte/sweetalert2
    var sweetAlert = function(){
        // Set default properties
        swal.setDefaults({
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success push-5-r',
            cancelButtonClass: 'btn btn-danger',
            inputClass: 'form-control'
        });

        // Init a simple alert on button click
        jQuery('.js-swal-alert').on('click', function(){
            swal('Hi, this is a simple alert!');
        });

        // Init an success alert on button click
        jQuery('.js-swal-success').on('click', function(){
            swal('Success', 'Everything updated perfectly!', 'success');
        });

        // Init an error alert on button click
        jQuery('.js-swal-error').on('click', function(){
            swal('Oops...', 'Something went wrong!', 'error');
        });

        // Init an example confirm alert on button click
        jQuery('.js-swal-confirm').on('click', function(){
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d26a5c',
                confirmButtonText: 'Yes, delete it!',
                html: false,
                preConfirm: function() {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, 50);
                    });
                }
            }).then(function(result){
                if (result.value) {
                    swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                } else if (result.dismiss === 'cancel') {
                    swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        });
    };

    return {
        init: function() {
            // Init randomize bar values
            barsRandomize();

            // Init SweetAlert
            sweetAlert();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BaseUIActivity.init(); });