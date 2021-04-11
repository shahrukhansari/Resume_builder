// work experience add

function addNewWEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

// Academic add
function addNewAQField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// projects add
function addNewPRField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let prOb = document.getElementById("pr");
    let prAddButtonOb = document.getElementById("prAddButton");

    prOb.insertBefore(newNode, prAddButtonOb);
}

// Technical add
function addNewTEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("teField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let teOb = document.getElementById("te");
    let teAddButtonOb = document.getElementById("teAddButton");

    teOb.insertBefore(newNode, teAddButtonOb);
}

// interest add
function addNewINField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("inField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let inOb = document.getElementById("in");
    let inAddButtonOb = document.getElementById("inAddButton");

    inOb.insertBefore(newNode, inAddButtonOb);
}



// Language add
function addNewLAField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("laField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here...");

    let laOb = document.getElementById("la");
    let laAddButtonOb = document.getElementById("laAddButton");

    laOb.insertBefore(newNode, laAddButtonOb);
}


//cv generation
function generateCV()
{

 
    document.getElementById("nameT").innerHTML =document.getElementById(
        "nameField"
    ).value;

    document.getElementById("jobT").innerHTML =document.getElementById(
        "jobField"
    ).value;
 
    

    document.getElementById("contactT").innerHTML =document.getElementById(
        "contactField"
    ).value;

    document.getElementById("addressT").innerHTML =document.getElementById(
        "addressField"
    ).value;

    document.getElementById("gitT").innerHTML =document.getElementById(
        "gitField"
    ).value;

    document.getElementById("linkedT").innerHTML =document.getElementById(
        "linkField"
    ).value;

    document.getElementById("instaT").innerHTML =document.getElementById(
        "instaField"
    ).value;


   //objective

   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   //work experience
   let wes=document.getElementsByClassName("weField");
   let str=""
   for(let e of wes){
       str = str + `<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML=str;

   //Academic qualification
   let aqs=document.getElementsByClassName("eqField");
   let str1=""
   for(let e of aqs){
       str1 = str1 + `<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML=str1;


   //projects
   let prs=document.getElementsByClassName("prField");
   let str2=""
   for(let e of prs){
       str2 = str2 + `<li> ${e.value} </li>`;
   }
   document.getElementById("prT").innerHTML=str2;


   //skills
   
   let tes=document.getElementsByClassName("teField");
   let str3=""
   for(let e of tes){
       str3 = str3 + `<li> ${e.value} </li>`;
   }
   document.getElementById("teT").innerHTML=str3;

      //Interest
   
      let ins=document.getElementsByClassName("inField");
      let str4=""
      for(let e of ins){
          str4 = str4 + `<li> ${e.value} </li>`;
      }
      document.getElementById("inT").innerHTML=str4;


//Interest
   
let las=document.getElementsByClassName("laField");
let str5=""
for(let e of las){
    str5 = str5 + `<li> ${e.value} </li>`;
}
document.getElementById("laT").innerHTML=str5;


   // image
   let file=document.getElementById("imgField").files[0];
   console.log(file);
   let reader=new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   //image template
   reader.onloadend = function(){
       document.getElementById("imgTemplate").src=reader.result;
   };

   document.getElementById('cv-form').style.display="none";
   document.getElementById("cv-template").style.display="block";


}
function printCV() {
    window.print();
}
