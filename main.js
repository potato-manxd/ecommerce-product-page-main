// note: the var below = 1; because the imgs dosent start from 0
let indexOfImgs = 1;

document.querySelector(".next").onclick = () => {
    ++indexOfImgs
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

    if (indexOfImgs == 4) {
        document.querySelector(".next").style.display = "none"
    }
    if (indexOfImgs < 4) {
        document.querySelector(".next").style.display = "inline-block"
    }
    if (indexOfImgs == 1) {
        document.querySelector(".pre").style.display = "none"
        document.querySelector(".next").style.transform = "translate(350px, -150px)"
    }

    if (indexOfImgs > 1) {
        document.querySelector(".pre").style.display = "inline-block"

        document.querySelector(".next").style.transform = "translate(325px, -150px)"

    }

}

document.querySelector(".pre").onclick = () => {
    --indexOfImgs
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

    if (indexOfImgs == 1) {
        document.querySelector(".pre").style.display = "none"
        document.querySelector(".next").style.transform = "translate(350px, -150px)"


    }

    if (indexOfImgs > 1) {
        document.querySelector(".pre").style.display = "inline-block"

        document.querySelector(".next").style.transform = "translate(325px, -150px)"

    }

    if (indexOfImgs == 4) {
        document.querySelector(".next").style.display = "none"
    }
    if (indexOfImgs < 4) {
        document.querySelector(".next").style.display = "inline-block"
    }

}

document.querySelector(".plus").onclick = () => {
    document.querySelector(".ii").textContent = Number(document.querySelector(".ii").textContent) + 1
}

document.querySelector(".minus").onclick = () => {
    document.querySelector(".ii").textContent = Number(document.querySelector(".ii").textContent) - 1
}
document.querySelector(".menu").onclick = () => {
    let mdiv = document.createElement("div")
    let h1 = document.createElement("h3")
    let h2 = document.createElement("h3")
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h3")
    let h5 = document.createElement("h3")
    h1.appendChild(document.createTextNode("Collections"))
    h2.appendChild(document.createTextNode("men"))
    h3.appendChild(document.createTextNode("women"))
    h4.appendChild(document.createTextNode("about"))
    h5.appendChild(document.createTextNode("contact us"))
    let x = document.createElement("h1")
    x.appendChild(document.createTextNode("x"))
    mdiv.appendChild(x)
    mdiv.appendChild(h1)
    mdiv.appendChild(h2)
    mdiv.appendChild(h3)
    mdiv.appendChild(h4)
    mdiv.appendChild(h5)
    document.querySelector(".container").appendChild(mdiv)
    mdiv.style.cssText = "padding:10px; direction:rtl; height:100%; width: 190px; position:absolute; transform:translatey(-750px); z-index:5; background:white;"
    x.onclick = () => {
        mdiv.remove()
    }
}
let mdiv = document.createElement("div")
let h2 = document.createElement("h3")
let hr = document.createElement("hr")
let p = document.createElement("p")

document.querySelector(".cart").onclick = () => {
    h2.appendChild(document.createTextNode("Cart"))
    mdiv.appendChild(h2)
    hr.style.width = "100%"
    mdiv.appendChild(hr)
    document.querySelector(".container").appendChild(mdiv)
    mdiv.style.cssText = "padding:10px; background:white;z-index:5;transform:translate(0px, -700px);width:98%; height:200px;"
    mdiv.setAttribute("class", "bye")
    p.appendChild(document.createTextNode("your cart is empty"))
    p.setAttribute("class", "hello")
    p.style.width = "fit-content"
    p.style.transform = "translate(80%, 100%)"
    mdiv.appendChild(p)
    document.querySelector(".cart").style.display = "none"
    document.querySelector(".rcart").style.display = "inline-block"
}

document.querySelector(".add").onclick = () => {
    document.querySelector(".cart").onclick = () => {

        document.querySelector(".container").appendChild(mdiv)
        mdiv.style.cssText = "padding:10px; background:white;z-index:5;transform:translate(0px, -700px);width:98%; height:200px;"
        mdiv.setAttribute("class", "bye")
        h2.appendChild(document.createTextNode("Cart"))
        mdiv.appendChild(h2)
        hr.style.width = "100%"
        mdiv.appendChild(hr)

        if (document.querySelector(".ii").textContent > 0) {
            let img = document.createElement("img")
            let t = document.createElement("span")
            let tt = document.createTextNode("Fall Limited Edition Sneakers")
            img.setAttribute("src", "images/image-product-1.jpg")
            img.style.width = "80px"
            let div = document.createElement("div")
            mdiv.appendChild(div)
            div.appendChild(img)
            t.appendChild(tt)
            div.appendChild(t)
            let price = document.createElement("p")
            price.appendChild(document.createTextNode("$" + document.querySelector(".ii").textContent * 125))

            div.appendChild(price)
        } else {

            p.appendChild(document.createTextNode("your cart is empty"))
            p.setAttribute("class", "hello")
            p.style.width = "fit-content"
            p.style.transform = "translate(80%, 100%)"
            mdiv.appendChild(p)


        }
        document.querySelector(".cart").style.display = "none"
        document.querySelector(".rcart").style.display = "inline-block"

    }

}

document.querySelector(".rcart").onclick = () => {

    document.querySelector(".cart").style.display = "inline-block"
    document.querySelector(".rcart").style.display = "none"
    document.querySelector(".bye").remove()
    hr.remove()
    p.remove()
    h2.remove()
    document.querySelector(".hello").remove()
}

if (window.innerWidth > 400) {
    document.querySelector(".menu").remove()

    document.querySelector(".next").onclick = () => {
        ++indexOfImgs
        document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

        if (indexOfImgs == 4) {
            document.querySelector(".next").style.display = "none"
        }
        if (indexOfImgs < 4) {
            document.querySelector(".next").style.display = "inline-block"
        }
        if (indexOfImgs == 1) {
            document.querySelector(".pre").style.display = "none"
            document.querySelector(".next").style.transform = "translate(-30px, -130px)"
        }

        if (indexOfImgs > 1) {
            document.querySelector(".pre").style.display = "inline-block"

            document.querySelector(".next").style.transform = "translate(-70px, -130px)"

        }

    }

    document.querySelector(".pre").onclick = () => {
        --indexOfImgs
        document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

        if (indexOfImgs == 1) {
            document.querySelector(".pre").style.display = "none"
            document.querySelector(".next").style.transform = "translate(-30px, -130px)"


        }

        if (indexOfImgs > 1) {
            document.querySelector(".pre").style.display = "inline-block"

            document.querySelector(".next").style.transform = "translate(-70px, -130px)"

        }

        if (indexOfImgs == 4) {
            document.querySelector(".next").style.display = "none"
        }
        if (indexOfImgs < 4) {
            document.querySelector(".next").style.display = "inline-block"
        }

    }
    document.querySelector(".producti").onclick = () => {
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(".tum1")[i].style.cssText = "transform:translate(-400px, -200px)"
        }
        document.querySelector(".plsno").style.cssText = "transform:translate(100px, -350px)"

    }
}

document.querySelector(".tum").onclick = () => {
    indexOfImgs = 1
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

}

document.querySelectorAll(".tum")[1].onclick = () => {
    indexOfImgs = 2
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

}

document.querySelectorAll(".tum")[2].onclick = () => {
    indexOfImgs = 3
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`

}

document.querySelectorAll(".tum")[3].onclick = () => {
    indexOfImgs = 4
    document.querySelector(".producti").src = `images/image-product-${indexOfImgs}.jpg`


}