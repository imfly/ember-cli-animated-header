import Ember from 'ember';
import Scroller from 'ember-cli-scroller';

var $document = Ember.$(document),
  $window = Ember.$(window),
  changeHeaderOn = 260;

function scrollPage() {
  var sy = scrollY();
  if (sy >= changeHeaderOn) {
    Ember.$('.cbp-af-header').addClass('cbp-af-header-shrink');
  } else {
    Ember.$('.cbp-af-header').removeClass('cbp-af-header-shrink');
  }
}

function scrollY() {
  return $window.pageYOffset || $document.scrollTop();
}

export default Ember.Component.extend(Scroller, {
  didInsertElement: function() {
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  scrolled: function() {
    scrollPage();
  }
});
