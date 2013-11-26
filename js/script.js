/**
 * @author vidhyakrish
 */



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
				if (localStorage.firstname) {
					$("#firstname").val(localStorage.firstname);
				}
				
				if (localStorage.lastname) {
					$("#lastname").val(localStorage.lastname);
				}
				
				if (localStorage.diningdate) {
					$("#diners").val(localStorage.dinngdate);
					 
				}
				if (localStorage.diners) {
					$("#diners").val(localStorage.diners);
					 
				}
				
				if (localStorage.phoneno) {
					$("#diners").val(localStorage.phoneno);
					 
				}
				if (localStorage.email) {
					$("#email").val(localStorage.email);
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
					 * output local storage to the console each time the form changes
					 *  
					 */
					.change(function(){
						console.log(localStorage);
					});
			}
		});
		
