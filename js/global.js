/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bsb = {
    attach: function (context, settings) {
      $(window).scroll(function() {

        if ($(this).scrollTop() > 50){  
          $('body').addClass("scrolled");
        }
        else{
          $('body').removeClass("scrolled");
        }
      });
    }
  };

})(jQuery, Drupal);
