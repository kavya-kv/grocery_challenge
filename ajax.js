

    //creating an Xhr oject
    var xhttp =new XMLHttpRequest();
    
    xhttp.onreadystatechange=function(){
        
        if(this.readyState==4&&this.status==200){
        
            var response=JSON.parse(this.responseText);
           var Jpeople=response.products;
            var output="";
            output+= "<th>"+ "serial.no  " +"</th>";
            output += "<th>"+ "name  " +"</th>";
            output += "<th>"+ "quantity  " +"</th>";
            output += "<th>"+ "unit  " +"</th>";
            output += "<th>"+ "department  " +"</th>";
            output += "<th>"+ "notes   " +"</th>";
            output+="</tr>";
            
            for(var i=0;i<Jpeople.length;i++){
               
                output+="<tr>";
                
                output += "<td>"+ Jpeople[i].serialno +"</td>";
                output += "<td>"+ Jpeople[i].name +"</td>";
                output += "<td>"+ Jpeople[i].quantity +"</td>";
                output += "<td>"+ Jpeople[i].unit +"</td>";
                output += "<td>"+ Jpeople[i].department +"</td>";
                output += "<td>"+ Jpeople[i].notes +"</td>\n";
                output+="</tr>";
                
            }
        
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","products.json",true);
    xhttp.send();
        
   
    
