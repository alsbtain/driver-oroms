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
       
function loadScript(){
	
		    var top = $("#scripts");
            top.html(" <script src='./js/jQuery.2.1.js'></script> "+"<script src='./js/webflow.js'></script> ");

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
        		
				loadorders();
        	});

        	});
        	
        	        	        	
          $("body").delegate("#loadmap","click",function(){
          	
			
			
			setlan($(this).data("lan"));
			setlog($(this).data("log"));
			
			vip()

        	});
        	
        	
        	
        	
        	
        	
        	
            
////////////////////////////////////////////////////////////////////


})();

