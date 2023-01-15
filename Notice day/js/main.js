
function first(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=covid19&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-1')
            let img=document.getElementById('noticia-1-img')
            let p=document.getElementById('p')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace("oldurl.com", "newurl.com"); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
first()

function second(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=Apple&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-2')
            let img=document.getElementById('noticia-2-img')
            let p=document.getElementById('p-2')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
second()

function thirdy(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=shopee&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-3')
            let img=document.getElementById('noticia-3-img')
            let p=document.getElementById('p-3')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
thirdy()
function fourteen(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=Computer&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-4')
            let img=document.getElementById('noticia-4-img')
            let p=document.getElementById('p-4')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
fourteen() 
function fifteen(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=Alexa&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-5')
            let img=document.getElementById('noticia-5-img')
            let p=document.getElementById('p-5')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
fifteen()
function sixteen(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=Netflix&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-6')
            let img=document.getElementById('noticia-6-img')
            let p=document.getElementById('p-6')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
sixteen()
function seventeen(){
    let apikey='6eed932e56514f79bfcb2d10f143c7af'
    let url=` https://newsapi.org/v2/everything?q=mercadolivre&apiKey=${apikey}`
    console.log(url)
    fetch(url).then((res)=>{
        return res.json()

    }).then(data => {
        console.log(data)
        data.articles.forEach((articles,index)=>{
        
            let title=document.getElementById('noticia-7')
            let img=document.getElementById('noticia-7-img')
            let p=document.getElementById('p-7')
            let des=p.textContent=articles.description;
            let titulo=title.textContent=articles.title;
            img.src = articles.urlToImage.replace(); 
            title.innerHTML(titulo);
            p.innerHTML(des);
            console.log(url)
        })
})
}
seventeen()
