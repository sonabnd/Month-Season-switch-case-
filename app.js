const month=Number(prompt("Enter a number between 1-12"));
if(isNaN(month)){
    alert("Just enter the number")
}
else{
    switch(month){
        case 1:{
            alert("January, Winter");
            break;
        }
        case 2:{
            alert("February,Winter");
            break;
        }
        case 3:{
            alert("March, Spring");
            break;
        }
        case 4:{
            alert("April, Spring");
            break;
        }
        case 5:{
            alert("May, Spring");
            break;
        }
        case 6:{
            alert("June, Summer");
            break;
        }
        case 7:{
            alert("July, Summer");
            break;
        }
        case 8:{
            alert("August, Summer");
            break;
        }
        case 9:{
            alert("September, Autumn");
            break;
        }
        case 10:{
            alert("October, Autumn");
            break;
        }
        case 11:{
            alert("November, Autumn");
            break;
        }
        case 12:{
            alert("December, Winter");
            break;
        }
        default:{
            alert("Enter only numbers between 1-12");
        }
    }
}
