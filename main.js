window.addEventListener("scroll",scrolltotop);
const sp=document.getElementsByTagName("span");
function scrolltotop()
{
    let mybutn=document.getElementById("mybtn");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutn.style.display="block";
        for(let i=0;i<sp.length;i++){
            sp[i].className="spans";
        }
        
    }
    else{
        mybutn.style.display="none";
        for(let i=0;i<sp.length;i++){
            sp[i].className="";
            sp[i].style.transition="0.5s"
        }
    }
}
document.getElementById("demo").innerHTML = this;
function totop()
{
    window.scrollTo({
        top:0 ,
        left: 0,
        behavior:"smooth"
    })
}
function openform()
{
    document.getElementById("myForm").style.display="block"
    document.getElementById("AddCert").style.filter="blur(3px)"
    document.getElementById("blurr").style.filter="blur(3px)"
}
function closeForm()
{
    document.getElementById("myForm").style.display="none"
    document.getElementById("AddCert").style.filter="blur(0px)"
    document.getElementById("blurr").style.filter="blur(0px)"

}
function certadd()
{
    let des =document.querySelector("#des")
    let place =document.querySelector("#place")
    let t =document.querySelector("#tim")
    document.getElementById("AddCert").innerHTML+="<h3><span>"+ des.value +"</span> | "+ place.value + "</h3>"
    document.getElementById("AddCert").innerHTML+="<h5>"+ t.value +"</h5>"
    document.getElementById("myForm").style.display="none"
    document.getElementById("AddCert").style.filter="blur(0px)"
    document.getElementById("blurr").style.filter="blur(0px)"
}


