var dt = document.lastModified;
document.getElementById("datetime").innerHTML = dt;

$('#dune1984').click(function () {
    var cnt=335;
    var btn = $(this);
    btn.button('loading');
    setTimeout(function () {
        cnt++;
        btn.button('reset');
        btn.text('  ' + cnt);
    }, 1000);
 });

$('#dune2021').click(function () {
    var cnt=334;
    var btn = $(this);
    btn.button('loading');
    setTimeout(function () {
        if (cnt > 0) {
            cnt++;
        }
        btn.button('reset');
        btn.text('  ' + cnt);
    }, 1000);
 });
 function validateForm1(myform){
 var fnameRGEX = /^[a-zA-Z]{1,23}(?: [a-zA-Z]+){0,2}$/;
 var lnameRGEX = /^[a-zA-Z]{1,23}(?: [a-zA-Z]+){0,2}$/;
 var emailRGEX  = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
 if (myform.firstname.value == "" || myform.firstname.value == null)
 {
   alert("First Name is mandatory");
   return false;

 }
     if(fnameRGEX.test(firstname.value) == false){
   alert("The length of First Name must be atleast 1-25 alphacharacters");
   firstname.focus();
   return false;
 }
    if(myform.lastname.value == "" || myform.lastname.value == null)
    {
      alert("Last Name is mandatory");
      return false;
    }
    if(lnameRGEX.test(lastname.value) == false){
   alert("The length of Last Name must be atleast 1-25 alpha characters");
   lastname.focus();
   return false;
 }
 if(myform.email1.value == "" || myform.email1.value == null || myform.email1.value == "youremail.yahoo.com")
    {
      alert("Email is mandatory");
      return false;
    }
   if(emailRGEX.test(email1.value) == false){
   alert("Email Address is invalid");
   email1.focus();
   return false;
 }
    else{
      return true;
    }
  }

  