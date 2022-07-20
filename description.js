let a = localStorage.getItem('contacts')
a = JSON.parse(a)

let id = sessionStorage.getItem('index');
id=Number(id)
console.log(a[id].name)

document.getElementById('image').src = a[id].photo;
document.getElementById('name').innerText = a[id].name;
document.getElementById('nameofcontact').innerText = a[id].name;

document.getElementById('email').innerText = a[id].email;
document.getElementById('phoneNumber').innerText = a[id].number;


document.getElementById('delete').addEventListener('click',()=>{
    JSONArray = JSON.parse(localStorage.getItem('contacts'));
    JSONArray.splice(id,1)

    localStorage.setItem('contacts',JSON.stringify(JSONArray))

    setTimeout(()=>{
        window.location.href = "index.html";
    },1000)
});


document.getElementById('send').addEventListener('click',()=>{
  let name = document.getElementById('myname').value;
  let email = document.getElementById('emailofsender').value
  let message =  document.getElementById('message').value

  console.log(name,message,email)
   if((name)&&(message)&&(email)){
    let data = {
      to_name:a[id].name,
      to_email:a[id].email,
      from_name:name,
      from_email:email,
      message:message
     }


    emailjs.send('service_j4703ir','template_6fcl89n',data).then((res)=>{
      window.alert("Message sent successfully")
      console.log(res)
    })
   }
   else{
     console.log("Field missing")
   }

   
});
