
let a = localStorage.getItem('contacts')
a = JSON.parse(a)
if (a) {
    for (let i = 0; i < a.length; i++) {
                document.getElementById('grid-container').innerHTML += `<div class="grid-container1" onclick="showItem(${i})">
                                                                    <img id="image" src=${a[i].photo} alt="image" class="image">
                                                                    <span id="name">${a[i].name}</span>
                                                                    </div> `
    
    }

}
else{
    document.getElementById('warning').style.display = 'block';
}










function showItem(i) {
    sessionStorage.setItem("index", i);
    console.log(i);

    setTimeout(() => {
        window.location.href = "description.html";
    }, 1000)
}

document.getElementById('mydeletbutton').addEventListener('click', () => {
    
    localStorage.clear();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000)
});






