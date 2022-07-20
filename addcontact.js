let btn = document.getElementById('add');

let image;










function uploadImage(input) {


  var filesSelected = document.getElementById("image").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      image = fileLoadedEvent.target.result; // <--- data: base64
      document.getElementById("add").disabled = false;


    }
    fileReader.readAsDataURL(fileToLoad);
  }

}



btn.addEventListener('click', (e) => {
  e.preventDefault();


  let name = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('number').value;

  if (name && email && number.length==10 && image) {
    let toInsert = {
      'name': name,
      'email': email,
      'number': number,
      'photo': image
    }
    console.log(toInsert)

    if (localStorage.getItem('contacts') == null) {

      JSONArray = [];
      JSONArray.push(toInsert);
      localStorage.setItem('contacts', JSON.stringify(JSONArray))

    } else {
      JSONArray = JSON.parse(localStorage.getItem('contacts'));
      JSONArray.push(toInsert);
      localStorage.setItem('contacts', JSON.stringify(JSONArray))
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000)

  }
  else {
    console.log("Some fields are missing")
    document.getElementById('error').style.display = 'inline';
  }







})










