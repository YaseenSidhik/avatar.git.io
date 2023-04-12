let message = document.getElementById("ans-1-message")
let message2 = document.getElementById("ans-2-message")
let message3 = document.getElementById("ans-3-message")
function submit1()
{
    let answer = document.getElementById("ans-1").value 
    console.log(answer)
    if(answer == -118)
    {
        message.textContent = "Correct answer go to next challenge"
    }
    else
    {
        message.textContent = "Wrong answer,try again"  
    }
}

function newtask2()
{
    let answer = document.getElementById("ans-1").value 
    console.log(answer)
    if(answer == -118)
    {
        window.location.href = "puzzle2.html";
    }
    else
    {
        message.textContent = "Wrong answer,try again"  
    }

}

function submit2()
{
    let answer = document.getElementById("ans-2").value 
    console.log(answer)
    if(answer == 7)
    {
        message2.textContent = "Correct answer go to next challenge"
    }
    else
    {
        message2.textContent = "Wrong answer,try again"  
    }
}

function newtask3()
{
    let answer = document.getElementById("ans-2").value 
    console.log(answer)
    if(answer == 7)
    {
        window.location.href = "puzzle3.html"
        console.log("If working")
    }
    else
    {
        message2.textContent = "Wrong answer,try again"  
    }

}

function submit3()
{
    let answer = document.querySelector("input[name=question]:checked").value 
    console.log(answer)
    if (answer === "true")
    {
        message3.textContent = "Correct answer go to next challenge"   
    }
     else
    {
        message3.textContent = "Wrong answer,try again"  
    }
}
function newtask4()
{
    let answer = document.querySelector("input[name=question]:checked").value 
    console.log(answer)
    if (answer === "true")
    {
        window.location.href="final.html"  
    }
     else
    {
        message3.textContent = "Wrong answer,try again"  
    }
}