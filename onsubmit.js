/* For now, this function parses the form being submitted and displays it on the console */
function log_values() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let subjectbody = document.getElementById("subjectbody").value;
    if(firstname === ""){
        firstname = "No Submission";
    }
    if(lastname === ""){
        lastname = "No Submission";
    }
    if(email === ""){
        email = "No Submission";
    }
    if(subject === ""){
        subject = "No Submission";
    }
    if(subjectbody === ""){
        subjectbody = "No Submission";
    }
    
    // Here, we log the values we get
    console.log(
        "======== Form Submission ========" +
          "\nFirst Name: " +
          firstname +
          "\nLast Name: " +
          lastname +
          "\nEmail: " +
          email +
          "\nSubject: " +
          subject +
          "\nMessage: " +
          subjectbody
      );
}