
var firstnameEl = document.querySelector("#firstname")
var form = document.querySelector("#registrationform")
var selectEl = document.querySelector("#field")
var dobEl = document.querySelector("#dob")
var jobEl = document.querySelector("#job")
var givennameEl = document.querySelector("#givename")
var porEl = document.querySelector("#por")
var nationalityEl = document.querySelector("#nationality")

var isRequired = (value) => (value === "" ? false : true);
var isBetween = (length, min, max) => length < min || length > max ? false : true;
var isRequire = (value) => (value === "none" ? false : true);  
  
var isNameValid = (number) => {
  var re = /^[A-Z]([a-z])+$/;
  return re.test(number);
};

var showError = (input, message) => {
  // get the form-field element
  var formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  var error = formField.querySelector("small");
  error.textContent = message;
};
var showSuccess = (input) => {
  // get the form-field element
  var formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  var error = formField.querySelector("small");
  error.textContent = "";
};
// Validate the username field
var checksurname = () => {
  let valid = false;
  var min = 1,
    max = 16;
  var surname = firstnameEl.value.trim();
 
  if (!isRequired(surname)) {
    showError(firstnameEl, " Required field");
    firstnameEl.style.border="1px solid red"
  } else if (!isNameValid(surname)) {
    showError(firstnameEl, "Incorrect Format");
    firstnameEl.style.border="1px solid red"
  } else if (!isBetween(surname.length, min, max)) {
    showError(
       firstnameEl ,
      `Username must be between ${min} and ${max} characters.`
    );
    firstnameEl.style.border="1px solid red"
  } else {
    showSuccess(firstnameEl );
    firstnameEl.style.border="1px solid green"
    valid = true;
  }
  return valid;
};

//validating select
var checkSelect = () => {
  let valid = false;
  var select = selectEl.value.trim();
  if (!isRequire(select)) {
    showError(selectEl, "Select Patient Category.");
    selectEl.style.border="1px solid red"
  } else {
    showSuccess(selectEl);
    selectEl.style.border="1px solid grey"
    valid = true;
  }

  return valid;
};
//validating DOB
var checkDob = () =>{
    let valid = false;
    var dob = dobEl.value.trim();
    if (!isRequired(dob)) {
      showError(dobEl, "This fill is required");
      dobEl.style.border = "1px solid red"  
    }
    else{
        showSuccess(dobEl);
        dobEl.style.border = "1px solid green"
        valid = true;
    }
    return valid
};

//validating occupation
var checkJob = () =>{
    let valid = false;
    var job = jobEl.value.trim();
    if (!isRequired(job)) {
      showError(jobEl, "This fill is required");
      jobEl.style.border = "1px solid red"  
    }
    else{
        showSuccess(jobEl);
        jobEl.style.border = "1px solid green"
        valid = true;
    }
    return valid
};

//validating given name
var checkgiveName =()=>{
  let valid = false;
  var min = 1,
    max = 16;
  var givenname = givennameEl.value.trim();
  if (!isRequired(givenname)) {
    showError(givennameEl, "This fill is required");
    givennameEl.style.border="1px solid red"
  }else if (!isNameValid(givenname)) {
    showError(givennameEl, "This fill is required");
    givennameEl.style.border="1px solid red"
  }else if (!isBetween(givenname.length, min, max)) {
    showError(
      givennameEl ,
      `Username must be between ${min} and ${max} characters.`
    );
    givennameEl.style.border="1px solid red"
  }else {
    showSuccess(givennameEl);
    givennameEl.style.border="1px solid green"
    valid = true;
  }
  return valid;
};

//validating place of residence
var checkPor =()=>{
  let valid = false;
  let valid = false;
  var min = 1,
    max = 20;
  var por = porEl.value.trim();
  if (!isRequired(por)) {
      showError(porEl, "This fill is required");
      porEl.style.border = "1px solid red"  
    }
    else{
        showSuccess(porEl);
        porEl.style.border = "1px solid green"
        valid = true;
    }
    return valid
};
//validating nationality
var checkNationality =()=>{
  let valid = false;
  var nationality = nationalityEl.value.trim();
  if(!isRequired(nationality)){
    showError(nationalityEl, "This fill is required");
    nationalityEl.style.border = "1px solid red"
  }
  else{
    showSuccess(nationalityEl);
    nationalityEl.style.border = "1px solid green"
    valid = true;
  }
  return valid
};



form.addEventListener("submit", function (e) {
  // prevent the form from submitting

  // validate forms
  let isSurnameValid = checksurname(),
   isSelectValid = checkSelect(),
   isDobValid = checkDob(),
   isJobValid = checkJob(),
   isGivennameValid = checkgiveName(),
   isPorValid = checkPor(),
   isNationalityValid = checkNationality()




  let isFormValid = isSurnameValid && isSelectValid && isDobValid && isJobValid && isGivennameValid && isPorValid && isNationalityValid;
 
  // submit to the server if the form is valid
  if (!isFormValid) {
    e.preventDefault();
  }
});
