document.addEventListener('DOMContentLoaded', () => {
    const jsForm = document.createElement("form");
    jsForm.setAttribute("id", "form");
    document.getElementById("app").appendChild(jsForm);

    const firstInput = document.createElement("input");
    firstInput.setAttribute("type", "text");
    firstInput.setAttribute("name", "firstNumber");
    firstInput.setAttribute("placeholder", "Pierwsza liczba");
    firstInput.setAttribute("class", "form-control");
    firstInput.style.marginBottom = "1rem";
    document.getElementById("form").appendChild(firstInput);

    const select = document.createElement("select");
    select.setAttribute("class", "form-control");
    select.setAttribute("name", "operation");
    select.setAttribute("id", "select");
    select.style.marginBottom = "1rem";
    document.getElementById("form").appendChild(select);

    const option1 = document.createElement("option");
    option1.setAttribute("name", "add");
    option1.setAttribute("value", "+");
    option1.innerText = "+";
    document.getElementById("select").appendChild(option1);
    
    const option2 = document.createElement("option");
    option2.setAttribute("name", "substract");
    option2.setAttribute("value", "-");
    option2.innerText = "-";
    document.getElementById("select").appendChild(option2);

    const option3 = document.createElement("option");
    option3.setAttribute("name", "multiply");
    option3.setAttribute("value", "*");
    option3.innerText = "*";
    document.getElementById("select").appendChild(option3);

    const option4 = document.createElement("option");
    option4.setAttribute("name", "divide");
    option4.setAttribute("value", "/");
    option4.innerText = "/";
    document.getElementById("select").appendChild(option4);

    const secondInput = document.createElement("input");
    secondInput.setAttribute("type", "text");
    secondInput.setAttribute("name", "firstNumber");
    secondInput.setAttribute("placeholder", "Druga liczba");
    secondInput.setAttribute("class", "form-control");
    secondInput.style.marginBottom = "1rem";
    document.getElementById("form").appendChild(secondInput);

    const blueBtn = document.createElement("button");
    blueBtn.setAttribute("id", "btn");
    blueBtn.setAttribute("class", "btn");
    blueBtn.innerText = "Oblicz";
    document.getElementById("form").appendChild(blueBtn);
    document.getElementById("btn").classList.toggle("btn-primary");

    



});
