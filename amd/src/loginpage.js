define(['jquery'], function($) {
    return {
        init: function() {
            $('#page-login-index .login-form').hide();
            
            $('#guest-login-button').click(function() {
                $('.login-option').hide();
                $('#login-holder').removeClass('col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-12');
                $('#login-holder').addClass('col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-6');
                $('.login-form').show();
                $('#username').focus();
            });
        }
    };
});