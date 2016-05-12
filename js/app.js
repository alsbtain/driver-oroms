(function(){



    checkReply = function(data) {
        if (typeof(data.status) != "undefined") {
           
            alert(data.message);
            return false;
        } else {
            return true;
        }
    };
    server = {
         url:"http://sbta.in/websites/oroms/service/",
            request: function(options) {
                return $.post(server.url+"index.php", options).promise();
            },
            debug: function(options) {
                return $.post(server.url+"debug.php", options).promise();
            }

       
       };
       	var isemployee  = localStorage.getItem("isemployee");

				var login  = localStorage.getItem("login");
				console.log(isemployee)

      function loadScript(){
	
		    var top = $("#scripts");
            top.html(" <script src='./js/jQuery.2.1.js'></script> "+"<script src='./js/webflow.js'></script>"+"<script>$(window).load(function(){$('.loaddiv').fadeOut();});</script>");

}
      
      function notificationcorrect(strblue){
	
		    var top = $("#notificationblue");
		    var top1=$("#successCode");
		    top1.html("<h3 class='notification-text'>"+strblue+"</h3>");
            top.click();

}
      function notificationincorrect(strred){
	
		    var top = $("#notificationred");
		    var top1=$("#errorCode");
		    top1.html("<h3 class='notification-text'>"+strred+"</h3>");
            top.click();

}
  

console.log();

$usersession = {


	
	
	
};

                 

			function loadorders(){
        	
        	  
            server.request({route:{app:'driver'}}).done(function(data){   
            		 			
		  	var source   = $("#orders").html();
   			var template = Handlebars.compile(source);
   			var html    = template( data );
  			$("#allorder").html(html); 
  			loadScript();
  			
  			
  			});}
        	
if(login=="false"){
          	window.location.assign("http://sbta.in/websites/oroms/login-emp/index.html");



}if(login=="true"){
if(isemployee==4){
      	 	      	 	 notificationcorrect("Hello Back");



        	loadorders();
        	
          $("body").delegate("#Picked","click",function(){
         	var id=$(this).data("id");

        	var s=4;
        	server.request({route:{app:'queryString',s:s,id:id}}).done(function(data){ 
        		
				loadorders();
        	});
			
        	});
        	
        	        	
               $("body").delegate("#Delivered","click",function(){
        	var id=$(this).data("id");

        	var s=5;
        	server.request({route:{app:'queryString',s:s,id:id}}).done(function(data){ 
        		      	 	      	 	 notificationcorrect("Delivered =)");
				loadorders();
        	});

        	});
        	
        	        	        	
          $("body").delegate("#loadmap","click",function(){
          	
			
			
			setlan($(this).data("lan"));
			setlog($(this).data("log"));
			
			vip()

        	});
        	
        	
  $("body").delegate(".logout-div","click", function(){
	localStorage.setItem("login",false);
	localStorage.removeItem("loginID");

	localStorage.removeItem("isemployee");
	window.location.assign("http://sbta.in/websites/oroms/login-emp/index.html");
});      	
        	
}else{
$("._5body").html("");

}
}        	
        	
        	
            
////////////////////////////////////////////////////////////////////


})();

