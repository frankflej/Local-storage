const get_all=()=>{
    const myall=JSON.parse(localStorage.getItem('array_info'))
    myall.forEach((n) => {
        document.getElementById('mycontent').innerHTML +=`
        <div class="mygrid" >
        <div class='myimgg'>
            <div>
                <img src="${n.myimg}" alt="">
            </div>
        </div>

        <div>
            <div>
                <h2>${n.name}</h2>
            </div>
            <div>
                <p>${n.mycomment}</p>
            </div>
        </div>
    </div>
        `
    });
}
