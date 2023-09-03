// strats
const img = document.querySelector("#imgId")

function img1(){
    img.src = "img/img_1.jpg"; 
}

function img2(){
    img.src = "img/img_2.jpg"; 
}
//ends

const paraStyle = document.getElementById("paraId");

function addStyle(){
    paraStyle.classList.add("para_style");
}

function removeStyle(){
    paraStyle.classList.remove("para_style");
}
//ends

// use addEventListerner
const heading1 = document.querySelector(".heading1");
heading1.addEventListener("mouseover", function(){
    heading1.style.color ="red";
    heading1.style.fontSize = "50px"
});

heading1.addEventListener("mouseout", function(){
    heading1.style.color ="";
    heading1.style.fontSize = ""
});
//ends

const backgrundBtn = document.querySelector("#backgrundBtnId");
backgrundBtn.addEventListener("click", function(){
    document.body.style.backgroundColor ="pink"
});

const backgrundRemoveBtn = document.querySelector("#backgrundRemoveBtnId");
backgrundRemoveBtn.addEventListener("click", function(){
    document.body.style.backgroundColor =""
});
//ends

const clickBtns = document.querySelectorAll(".myBtn");

for(const clickBtn of clickBtns)
clickBtn.addEventListener("click", function (){
    const text = this.innerText
    document.querySelector("#heading1").innerText ="clicked " + text;
});
//ends

document.getElementById("sub_btn").addEventListener("click", function (){
        const inputFiled = document.getElementById("input_filed");
        const inputText = inputFiled.value;

        const setTex = document.getElementById("para");
        setTex.innerText = inputText;

        inputFiled.value = "";
});
//ends

document.getElementById("btn_post").addEventListener("click", function (){
        const commentBox = document.getElementById("text_area");
        const comment = commentBox.value;

        const para = document.getElementById("paragraph");

        const creatElement =document.createElement("p");
        creatElement.innerText = comment;

        para.appendChild(creatElement);

        commentBox.value = "";
});
//ends

document.getElementById("delete_comfirm").addEventListener("keyup", function (event){
        const text = event.target.value;
        const deleteBtn =  document.getElementById("delete_btn");

        if(text === "delete"){
            deleteBtn.removeAttribute("disabled");
        }
        else{
            deleteBtn.setAttribute("disabled", true);
        }
});

document.getElementById("delete_btn").addEventListener("click", function (){
    const serctInfo = document.getElementById("serct_info");
    serctInfo.style.display = "none"
});