document.querySelector('.card').addEventListener('mouseover',()=>{
    document.getElementById('name').innerText="AshuraMajestic";
    document.getElementById('img').src="img/github.png";
    document.querySelector('html').style.backgroundColor="#FF69B4";
})

document.querySelector('.card').addEventListener('mouseout',()=>{
    document.getElementById('name').innerText="@ashuramajestic";
    document.getElementById('img').src="img/insta.png";
    document.querySelector('html').style.backgroundColor="#1a1a1d";
})
