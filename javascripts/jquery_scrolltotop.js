/*!
    jQuery scrollTopTop v1.0 - 2013-03-15
    (c) 2013 Yang Zhao - geniuscarrier.com
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.fn.scrollToTop = function(options) {
        var config = {
            "speed" : 400
        };

        if (options) {
            $.extend(config, {
                "speed" : options
            });
        }

        return this.each(function() {

            var $this = $(this);

            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $this.fadeIn();
                } else {
                    $this.fadeOut();
                }
            });

            $this.click(function(e) {
                e.preventDefault();
                $("body, html").animate({
                    scrollTop : 600
                }, config.speed);
            });

        });
    };
})(jQuery);
