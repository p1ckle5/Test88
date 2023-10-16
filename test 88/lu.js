const emailinput=document.getElementById("email");
const passwordinput=document.getElementById("password");
const submitbutton=document.getElementById("submit");

submitbutton.addEventListener("mouseover",(button)=>{
    let email=emailinput.value;
    let password=passwordinput.value;

    let validate= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.
    test(email) && /[a-zA-Z0-9]{8}/.test(password)

    if(validate){
        button.target.classlist.toggle("move");
    }else{
        button.target.classlist.add("stop")
    }

})

// /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/ this is validation for email with regular expression

// .test() will get either tue or false