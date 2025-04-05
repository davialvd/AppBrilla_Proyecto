const wrapper = document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');

const btn = document.querySelector('.btnLogin-popup');

btn.addEventListener('click',() =>{
    wrapper.classList.add('active-popup');
});
document.getElementById("register-form").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const user = e.target.children.user.value;
    const password = e.target.children.password.value;
    const res = await fetch("http://localhost:4000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user,password
      })
    });
    if(!res.ok) return mensajeError.classList.toggle("escondido",false);
    const resJson = await res.json();
    if(resJson.redirect){
      window.location.href = resJson.redirect;
    }
  })