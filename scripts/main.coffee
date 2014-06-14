###
	reclaiming-the-editor

	main.coffee

	@author Sean
	
	@note Created on 2014-06-13 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
###
jQuery(document).ready ->
	console.log "ready for action"
	$slides = $(".slides").jmpress()
	$nextButtons = $(".next-slide").on("click", ->
		$(".slides").jmpress("next")
		false
	)