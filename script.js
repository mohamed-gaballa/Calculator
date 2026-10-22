function chang(){
    let q=document.getElementById("firest").value;
    let w=document.getElementById("wasat").value;
    let e=document.getElementById("wasat2").value;
    let r=document.getElementById("foot").value;
    let profit=e-r;
    let result = profit > 0 ? "ربح" : profit < 0 ? "خسارة" : "لا ربح ولا خسارة";
    console.log(profit);
    if(profit>0){Swal.fire({
  title: "ربح!",
  icon: "success",
  draggable: true
});}
else if(profit<0)Swal.fire({
  icon: "error",
  title: "خساره",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
else{Swal.fire({
  title: "agian?",
  text: "That thing is still around?",
  icon: "question"
});}
    let u=document.createElement("tr");
     u.innerHTML=`
                 <td><img src="${w}"></td>
                <td>${q}</td>
                <td>${r}</td>
                <td>${e}</td>
                <td>${profit}</td>
                <td>${result}</td>`
    document.getElementById("body").appendChild(u);
}