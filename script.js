function submit() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var location = document.getElementById("location").value;
    var enquiry = document.getElementById("enquiry").value;
    var StringOutput = "<strong>Congratulations..!!!</strong><br><strong>Your Name:</strong> "+fullname+"<br><strong>Your Email:</strong> "+email+"<br><strong>Your Gender: </strong>"+gender+"<br><strong>Your Location: </strong>"+location+"<br><strong>Your Enquiry: </strong>"+enquiry;
    if(fullname == "" || email == "" || gender == "" || location == "" || enquiry == ""){
        alert("PLEASE ENTER THE VALUES");
    }
    else{
        w = window.open(location.href+"blank.html",'TheNewpop','height=315,width=625');  
        w.document.write(
            "<body><div style='padding:50px;font-size: 20px;'>"+
            StringOutput+
            "</div></body>" 
            );
        w.document.close(); 
        w.focus();
    }
    }