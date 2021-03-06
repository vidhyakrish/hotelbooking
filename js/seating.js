$(document).ready(function () {
			/*
			 * check browser supports local storage
			 */
			if (localStorage) {
				/*
				 * if form field values exist in local storage use
				 * them to populate the form when the page loads
				 */
				if (localStorage.type) {
					$("#type").find("option[value=" + localStorage.type + "]").attr("selected", true);
				}
				if (localStorage.name) {
					$("#name").val(localStorage.name);
					
				}
				if (localStorage.diners) {
					$("#diners").val(localStorage.diners);
				}
				if (localStorage.email) {
					$("#email").val(localStorage.email);
				}
				if (localStorage.message) {
					$("#message").val(localStorage.message);
				}
				if (localStorage.subscribe === "checked") {
					$("#subscribe").attr("checked", "checked");
				}
				
				/*
				 * when a form field changes store it's value in local storage
				 */
				$("input[type=text],select,textarea").change(function(){
					$this = $(this);
					localStorage[$this.attr("name")] = $this.val();
				});
				$("input[type=checkbox]").change(function(){
					$this = $(this);
					localStorage[$this.attr("name")] = $this.attr("checked");
				});
				
				$("form")
					/*
					 * clear local storage when the form is submitted
					 */
					.submit(function(){
						localStorage.clear();
					})
					/* 
					 * output local storage to the console each time the form changes
					 * (you may want to remove this code on the production server)
					 */
					.change(function(){
						console.log(localStorage);
					});
			}
		});
