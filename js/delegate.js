/* const items =  document.querySelectorAll(".list_item");

for(const item of items){
    item.addEventListener("click", function(event){
        event.target.parentNode.removeChild(event.target);
    });
}; */

document.getElementById("list_container").addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target);
});


document.getElementById("add_item_btn").addEventListener("click", function(){
    const listtContainer = document.getElementById("list_container");

    const li = document.createElement("li");
    li.innerText ="new item add"

    listtContainer.appendChild(li);
})