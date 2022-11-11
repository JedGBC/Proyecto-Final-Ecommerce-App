'use strict'
//https://www.mercadolibre.cl/ofertas#c_id=/home/promotions-recommendations/element&c_uid=79c55ea8-abf2-4132-af47-63851754687e
/*
Proyecto Final 👨‍🎓 Ecommerce App

Usar Reactividad en JS (implementar un estado - puedes usar como ejemplo el código fuente de la Clase 9) para que la aplicación de ECommerce de la Tarea 4 (HW4) tenga las siguientes funcionalidades:

👉 La App muestra un Navbar (barra de navegación superior) donde se muestra el nombre de la aplicación en la esquina superior izquierda, y un icono de "Carrito de Compras" en la esquina superior derecha)
👉 Debajo del Navbar se muestra el catálogo de productos (todos a la vez - debes "mezclar" tus productos hardcodeados con los productos de Mercado Libre - manten el paginado)
👉 Cada producto debe poder ser enviado a un "Carrito de compras" (Cart) - usar un botón para esta acción
👉 El carrito de compras debe poder ser mostrado usando el icono del Navbar
👉 En el carrito de compras se debe poder eliminar un producto

Notar que, si bien es cierto, vas a tomar como base el código resultante de la tarea 4; quizá tengas que volver a escribir la aplicación completa.

Notar que debes mostrar hacer el cambio de vista (entre catálogo y carrito de compras) usando Javascript (no cambies de página) - recuerda cómo lo hacíamos en las primeras clases de nuestro curso, allá por la clase 4

*/

//ocultar el cart
//document.getElementById("cart").style.Height=0;
//document.getElementById("cart").style.visibility= 'hidden';
//document.getElementById("cartEmpty").style.visibility= 'hidden'; //ocultamos el carrito esta Vacio

//document.getElementById("cart").style.minHeight=0;


//document.getElementById("cartEmpty").remove(); /////QUITAR DEL CODIGO

//declare vars              //Usos
let itemSelected = ""; //eventoClickAddCartProducts
let statusCarritoAbierto = false; //false= cerrado , true = abierto
let productosCarrito = []; //array de lo que se cargara en el carrito

let products = [
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_1.png", "priceProduct": 0, "nameProduct": "Cafetera Dolce- Gusto Pro" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_2.png", "priceProduct": 0, "nameProduct": "Afeitadora GAMA 3 en 1" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_3.png", "priceProduct": 0, "nameProduct": "Banco de trabajo Sierra Circular Skil" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_4.png", "priceProduct": 0, "nameProduct": "Microfono High Tech" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_5.png", "priceProduct": 0, "nameProduct": "Nuevo Lenovo Lmax" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_6.png", "priceProduct": 0, "nameProduct": "Audifonos de Oreja Stark Negros" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_7.png", "priceProduct": 0, "nameProduct": "Impresora multifuncional HP 4165" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_8.png", "priceProduct": 0, "nameProduct": "iPhone Pro XZ 1TB" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_9.png", "priceProduct": 0, "nameProduct": "Audifonos Sony in-Ear Pro 69" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_10.png", "priceProduct": 0, "nameProduct": "Nuevo Xiaomi Pro Luxury con reloj de regalo" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_11.png", "priceProduct": 0, "nameProduct": "Jabon Liquido Removex Ultra 1Gal" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_12.png", "priceProduct": 0, "nameProduct": "SmartWatch Sonic Arts" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_13.png", "priceProduct": 0, "nameProduct": "Marcadores Infinito" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_14.png", "priceProduct": 0, "nameProduct": "Nuevo Nescafe Fina Selección 200g" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_15.png", "priceProduct": 0, "nameProduct": "Air Frier Oster 5lts" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_16.png", "priceProduct": 0, "nameProduct": 'Smart TV LedCore Caixun HD 32"' },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_17.png", "priceProduct": 0, "nameProduct": "Sapatillas Air to fast" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_18.png", "priceProduct": 0, "nameProduct": "Juego de Taladro con 2 baterias, El Chinito" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_19.png", "priceProduct": 0, "nameProduct": "Camaras LPTZ 360° HD Yoosee" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_20.png", "priceProduct": 0, "nameProduct": "Bocina inalambrica Soundcore ProMax" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_21.png", "priceProduct": 0, "nameProduct": "Chromecast 50gb 8K" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_22.png", "priceProduct": 0, "nameProduct": "Six-Pack RedBull" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_23.png", "priceProduct": 0, "nameProduct": "Tostaito el pan MarkPlus" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_24.png", "priceProduct": 0, "nameProduct": "Notebook ACER Pro One Fast" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_25.png", "priceProduct": 0, "nameProduct": "Juego Sartenes de Plomo Cocido" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_26.png", "priceProduct": 0, "nameProduct": "Cinta Metrica 500m" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_27.png", "priceProduct": 0, "nameProduct": "Whey Protein + Aumenta Más" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_28.png", "priceProduct": 0, "nameProduct": "Silla KAOS Ultra comoda" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_29.png", "priceProduct": 0, "nameProduct": "VCR + 8 cams kit Fansonic" },
    { "idProduct": 1, "imgProduct": "img/products/Screenshot_30.png", "priceProduct": 0, "nameProduct": "Samchong S22 Ultra 1TB Economic" }
];




iniciarArrayProducts(products);

function iniciarArrayProducts(array) {
    array.forEach(element => {
        element.priceProduct = preciosAleatoriosEntre2montos();
        element.idProduct = etiquetaCodeIdProduct();
        console.log(element);
        cargaProductsCatalogo(element);
    });
    console.log("Pructos existentes:",array.length);
}



//Event vigila el click en boton agregar al carrito+
function eventoClickAddCartProducts() {
    console.log("***********+eventoClickAddCartProducts");  
    //let arrayItemPossiblySelected = "";
    //arrayItemPossiblySelected = document.querySelectorAll("li");
    let arrayItemPossiblySelected = document.querySelectorAll(".btonAgregarCart");
    //console.log(arrayItemPossiblySelected[0].textContent);

    arrayItemPossiblySelected.forEach(function (element) {
        element.addEventListener("click", function () {
            itemSelected = element.parentNode.parentNode.id;
            //funcion para pasar el item
            console.log("Click on idProduct# ", element.parentNode.parentNode.id);
            cargaProductsCarrito(itemSelected,products);
            //element.removeEventListener("click");
        })
    })
}



//Event vigila el click en Boton Eliminar un producto en el Cart
function eventoClickEraseCartProducts() {
    console.log("***********-eventoClickEraseCartProducts");
    //let arrayItemPossiblySelectedToErase = document.querySelectorAll("tr");
    //const arrayItemPossiblySelectedToErase = document.querySelectorAll(".nameProduct");
    //console.log(arrayItemPossiblySelectedToErase[0].textContent); //onClick
    let arrayItemPossiblySelectedToErase = document.querySelectorAll("#onClick");

    arrayItemPossiblySelectedToErase.forEach(function (element) {
        element.addEventListener("click", function () {
            itemSelected = element.parentNode.parentNode.id;
            document.getElementById(itemSelected).remove();
            //funcion para pasar el item
            console.log("Click on Eliminar idProduct# ", element.parentNode.parentNode.id);
        })
    })
}




//#Formateo de precios de productos aleatorios entre dos montos
function preciosAleatoriosEntre2montos(min = 3900, max = 82000) {
    
    const numero = Math.round(Math.random() * (max - min) + min);
    const formateado = numero.toLocaleString("sp", {
	style: "currency",
	currency: "CLP"
    });

    return formateado;
}


//#Formateo de IDs al iniciar el ciclo. Ids Dinámicos.
function etiquetaCodeIdProduct() {
    let code = Date.now();
    return code;
}




/// AGREGAR Productos al Catalogo
function cargaProductsCatalogo(producto){
    console.log("***********+cargaProductsCatalogo , ID:",producto.idProduct);
    //id=contenedorCatalogoProductos
    const cargaProductsCatalogo = document.getElementById("contenedorCatalogoProductos");
    
    const formatPriceProduct = producto.priceProduct; //FORMATEAAAAAAARRRRRRR COSTO PONER PUNTO EN MILES

    cargaProductsCatalogo.innerHTML += `
        <li class="listProduct" id=${producto.idProduct}>
            <div class="product">
                <div class="imgProduct"><img src=${producto.imgProduct} alt=""></div>
                <div class="priceProduct">${formatPriceProduct}</div>
                <div class="nameProduct">${producto.nameProduct}</div>
                <div class="btonAgregarCart"> <button type="submit" onclick="onclick22(${producto.idProduct})">Agregar al Carrito+</button> </div>
            </div>
        </li>
    `;

    /* PLANTILLA MOLDE PRODUCTOS
                <li class="listProduct" id=1>
                    <div class="product">
                        <div class="imgProduct"><img src="img/products/Screenshot_1.png" alt=""></div>
                        <div class="priceProduct">$ 20.001</div>
                        <div class="nameProduct">Producto1</div>
                        <div class="btonAgregarCart"> <button type="submit" onclick="eventoClickAddCartProducts()">Agregar al Carrito+</button> </div>
                    </div>
                </li>
    */  
}

function onclick22(value){
    console.log(value);
}



/// AGREGAR Productos al Carrito
function cargaProductsCarrito(idProduct,array){
        console.log("***********+cargaProductsCarrito, ID:",idProduct);
        cargarCarritoImg(1);
        let positionArray = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i].idProduct==idProduct) {
                positionArray = i;
                break;
            }
        }
            
    if (positionArray!= -1) {
            console.log("positionArray = ",positionArray);
            console.log("Objeto encontrado: ",array[positionArray]);
        let objetoEncontrado = array[positionArray];

        let duplicidad = verificarNoDuplicidadProductoCart(idProduct,productosCarrito);
        //duplicidad // 0=no 1=ya esta 1 vez y asi........
        if (duplicidad==0) {
            objetoEncontrado.amountProduct= 1;
            console.log(objetoEncontrado);
            productosCarrito.push(objetoEncontrado);
        } else {
            let positionArrayD = -1;
            for (let i = 0; i < productosCarrito.length; i++) {
                if (productosCarrito[i].idProduct==idProduct) {
                    positionArrayD = i;
                    break;
                }
            }
            const valorNew = duplicidad+1;
            productosCarrito[positionArrayD].amountProduct= valorNew;
        }

            console.log("Array -> productosCarrito: ",productosCarrito);
    }
}

function verificarNoDuplicidadProductoCart(idProduct,array){
    let positionArrayE = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].idProduct==idProduct) {
            positionArrayE = i;
            break;
        }
    }
    let duplicidad = 0;

    if (positionArrayE!= -1) {
        duplicidad = array[positionArrayE].amountProduct;
        console.log("Duplicidad del producto: ",duplicidad);
        return duplicidad;
    } else {
        console.log("Duplicidad del producto: ",duplicidad);
        return duplicidad;
    }
}



//Evento listener Cierra/Abre el carrito
function abreCierraCarrito(){
    console.log("***********abreCierraCarrito, Status Actual:",statusCarritoAbierto);
    console.log("window.scrollY:",window.scrollY);
    if (window.scrollY == 0){
        if (window.scrollX != 0) {
            window.scroll(0,0);
        }        
        if (statusCarritoAbierto == false) {
            statusCarritoAbierto = true;
            //////////////////////////////////////////////////Activa el carga carrito.
        }else if (statusCarritoAbierto == true) {
            document.getElementById("cart").remove();
        }
        console.log("Status Actualizado:",statusCarritoAbierto);
    } else {
        window.scroll(0,0);
        if (statusCarritoAbierto == false) {
            statusCarritoAbierto = true;
            //////////////////////////////////////////////////Activa el carga carrito.
        }
        console.log("Status Actualizado:",statusCarritoAbierto);
    }
    
        
}


//Activar los listeners!!!
eventoClickAddCartProducts(); //genera la red de eventos sobre los botones de agregar al carrito
eventoClickEraseCartProducts(); //genera la red de eventos sobre los botones de eliminar del carrito



function cargarCarritoImg(value){
    document.querySelector("#cartLogo img").attributes[0].nodeValue = "img/cart_empty.png";// cargo la imagen del carrito. "img/cart_empty.png"  "img/cart_carged.png"  "img/shoping_cart.png"  "img/shopping-bag-3744.png"
    if (value==1) {
        document.getElementById("im2").style.left="-91px";
        document.querySelectorAll("#cartLogo img")[1].attributes[0].nodeValue = "img/shopping-bag-3744.png";//cargo la imagen donde el carrito esta con items
    } else {
        document.getElementById("im2").style.left="10000px";
        document.querySelectorAll("#cartLogo img")[1].attributes[0].nodeValue = "";
    }
    console.log(document.getElementById("im2").style);
}


cargarCarritoImg(0);//0 es carrito vacio //1 es carrito con al menos 1 item. 




/////Asigno valor a la cantidad en carrito
document.querySelectorAll(".cant")[0].value = 1;
    //console.log(document.querySelectorAll(".cant")[0].value);
    //console.log(document.getElementsByClassName("cant")[0].value);