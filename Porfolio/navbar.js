function home() {
      document.getElementById('li-home').style.background="#323232";
      document.getElementById('home').style.color="white";

      document.getElementById('li-profile').style.background="";
      document.getElementById('profile').style.color="";
      document.getElementById('studies').style.color="";
      document.getElementById('message').style.color="";
    }
    function profile() {
      document.getElementById('li-home').style.background="white";
      document.getElementById('home').style.color="#323232";

      document.getElementById('li-profile').style.background="#323232";
      document.getElementById('profile').style.color="#fff";
      document.getElementById('studies').style.color="";
      document.getElementById('message').style.color="";
    }
    function studies() {
      document.getElementById('li-home').style.background="white";
      document.getElementById('li-home').style.color="#323232";

      document.getElementById('li-profile').style.background="white";
      document.getElementById('profile').style.color="#323232";

      document.getElementById('studies').style.color="white";
      document.getElementById('li-studies').style.background="#323232";

      document.getElementById('home').style.color="#cbf7ed";
      document.getElementById('profile').style.color="";
      
      document.getElementById('message').style.color="";
    }
    function message() {
      document.getElementById('home').style.color="#cbf7ed";
      document.getElementById('profile').style.color="";
      document.getElementById('studies').style.color="";
      document.getElementById('message').style.color="green";
    }