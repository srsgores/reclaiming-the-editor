// Generated by CoffeeScript 1.7.1

/*
	reclaiming-the-editor

	main.coffee

	@author Sean
	
	@note Created on 2014-06-13 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
 */

(function() {
  jQuery(document).ready(function() {
    var $nextButtons, $slides;
    console.log("ready for action");
    $slides = $(".slides").jmpress();
    return $nextButtons = $(".next-slide").on("click", function() {
      $(".slides").jmpress("next");
      return false;
    });
  });

}).call(this);

//# sourceMappingURL=main.map
