const btn = document.querySelectorAll("button");
const fancy = document.getElementById("fancy");
const boring = document.getElementById("boring");
const text = document.getElementById("fancifymytext");

function hello_world() {
    alert("Hello, world!");
}

btn[0].onclick = () => {
    text.style.fontSize = "xx-large";
};

btn[1].onclick = () => {
    alert("Moo!");

    var content = text.value;
    var parts = content.split(".");

    for (let i = 0; i < parts.length; i++){
        var checkLeft = 0;
        var checkRight = 0;
        if (parts[i].charAt(0) == " "){
            parts[i] = parts[i].trimLeft();
            checkLeft = 1;
        }

        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
        //alert(parts[i]);

        if (checkLeft == 1){
            //parts[i].unshift(" ");
            parts[i] = " " + parts[i];
        }
    }



    content = parts.join("-Moo.");
    text.value = content;
};

function toggleWeight(){
    if (fancy.checked){
        alert("Fancy!");

        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }

    else if (boring.checked) {
        alert("Boring...");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "initial";
    }
}

fancy.addEventListener("change", toggleWeight);
boring.addEventListener("change", toggleWeight);