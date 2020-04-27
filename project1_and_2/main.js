//Shows the current date and time and updates every 1s
window.setInterval(function(){
    document.getElementById("date").innerHTML = Date();
  }, 1000);

// Show alert if user click on POPUP submenu
  document.getElementById("popup").addEventListener('click', () => {
    alert("This is a js alert");
  }, false);

// Toggle company name in header
document.getElementById("company").addEventListener('click', () => {
    if(document.getElementById("company").innerHTML == "Company")
        document.getElementById("company").innerHTML = "MyCompany!"
    else
        document.getElementById("company").innerHTML = "Company"
  }, false);