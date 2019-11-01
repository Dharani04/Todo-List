function add()
{
    var list = document.createElement("li");
    var x = document.getElementById("action").value;
    list.innerHTML = x;
    var c = document.createElement("input");
    var b = document.createElement("button");
    b.setAttribute("class", "x");
    list.appendChild(b);
    b.innerText = "X";
    b.addEventListener("click", del);
    c.type = "checkbox";
    c.setAttribute("class", "check");
    c.style.visibility = "hidden";
    list.appendChild(c);
  
    if (x != "")
        document.getElementById("empty").appendChild(list).addEventListener("click", al);
    else
        alert("Enter something!")
    document.getElementById("action").value = "";
    function al()
    {
        c.style.visibility = "visible";
        c.checked = "true";
        list.setAttribute("class", "checked");
    }
    function del()
    {
        list.remove(globalThis);
    }
}