$(document).ready(function(){$(".form-entry").focus(function(){$(this).prev().css({"margin-bottom":"0px","font-size":"1em"});event.stopPropagation()});if(localStorage.getItem("popState")!="shown"){$("#popup").delay(500).fadeIn();localStorage.setItem("popState","shown")}$("#popup-close").click(function(){$("#popup").fadeOut()});$.getJSON("reference.json",function(e){var a=[];$.each(e,function(e,t){a.push("<div class='form-entry__wrap'>"+"<p class='form-entry__title'>"+e+"</p>"+'<input type="text" class="form-entry" value = "'+t+'"/>'+"</div>")});$("<div/>",{class:"resultWrap-inner",html:a.join("")}).appendTo(".resultWrap");$("<button/>",{class:"form-entry__button",id:"save-changes",type:"submit",html:"Submit Changes"}).appendTo(".resultWrap");$("#save-changes").click(function(){location.reload()})});$("#search-submit").click(function(){if($("#referenceInput").val()==26){$(".invalidWrap").append("<img id='truck' class='truck' src='../../src/images/truckLoad.gif'/>");$(".invalidWrap").append("<p class='loading-text'>Please Wait while we gather your information</pclass>");setTimeout(function(){$(".invalidWrap").remove()},1995);$(".resultWrap").delay(2e3).fadeIn("slow");$(".reference-invalid").css("display","none")}else{$("<div/>",{class:"reference-invalid",html:"Please enter a valid reference number"}).appendTo(".invalidWrap");event.stopPropagation()}})});