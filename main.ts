function ColorChanger(){

let colors : any = document.querySelectorAll("#color")
let left : any = document.querySelector(".left-content")
let headers : NodeListOf<HTMLHeadingElement> = document.querySelectorAll(".right-content h1")
let borders : NodeListOf<HTMLElement> = document.querySelectorAll(".education-section, .experience-section")

colors.forEach(function(e:any){
    e.addEventListener("click", function(){

        let colorers = e.getAttribute("data-clr")
        
        left.style.backgroundColor = colorers;

        headers.forEach((header) => {
            header.style.color = colorers;
        })

        borders.forEach((border) => {
            border.style.borderColor = colorers;
        })
    })
})

}

ColorChanger();