l
    
    
    function productsData(displayData){
        let productData=" ";
    displayData.forEach((data)=>{
       productData +=`<div>
            <img class="inline transition duration-300 hover:transform hover:-translate-y-2" src="./images/${data.img}">
            <h2 class="font-bold">${data.name}</h2>
            <p>$${data.price}</p>
        </div>`
      
    })
    document.getElementById("prodId").innerHTML=productData;
    // console.log(productData)
    }
    
    window.onload = function () {
        productsData(productsObj);
    }
    
    
    function searchData(){
        let inpData=document.getElementById("inpSearch").value;
        let filteredData= productsObj.filter((data)=>{
              return data.name.toUpperCase().indexOf(inpData.toUpperCase()) != -1;
        })
        productsData(filteredData);
    }