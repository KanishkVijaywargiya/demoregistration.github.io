function validate() {
    var result_text = document.getElementById("result");
    var dob = document.getElementById("dob").value;
    var birth_year = parseInt(dob.substring(0, 4));
    var doj = document.getElementById("doj").value;
    var join_year = parseInt(doj.substring(0, 4));

    if (join_year - birth_year < 17) {
        result_text.innerHTML = "Too young to start the college!"
        return;
    }

    var branch = document.getElementById("branch").value;
    if (branch.search(/(CSE|ECE|ME|CE|EEE|BCA|MCA)/i) == -1) {
        result_text.innerHTML = "Invalid branch!";
        return;
    }

    var mobile_no = document.getElementById("mobile").value;
    if (mobile_no.search(/^[0-9]+$/) == -1 && mobile_no.length != 10) {
        result_text.innerHTML = "Invalid mobile number!";
        return;
    }

    var email = document.getElementById("email_add").value;
    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0- 9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == -1) {
        result_text.innerHTML = "Invalid email ID"; return;
    }

    alert('Successfully transmitted data!'); result_text.innerHTML = "Success!";
}