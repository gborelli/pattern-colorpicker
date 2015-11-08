
define([
  'jquery',
  'mockup-patterns-base',
  'bootstrap-tooltip',
  'bootstrap-colorpicker'

], function($, Base) {
  'use strict';

  var colorpickerPattern = Base.extend({
    // The name for this pattern
    name: 'colorpicker',

    defaults: {
      // Default values for attributes
    },

    init: function() {
      var self = this;
      self.$el.colorpicker();
    }
  });

  return colorpickerPattern;

});
