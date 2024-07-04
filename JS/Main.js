import { AgregarProducto, eliminarProducto, obtenerProductos } from "./Controller/service.js";



const Productodata = document.querySelector('[data-producto]');
const Productoform = document.querySelector('[data-form]');

const eliminarproducto = document.querySelector(".eliminar");

const CargarProducto = async () => {
    const productos = await obtenerProductos();

    productos.forEach(element => {

        console.log(element);
        const Productocard = document.createElement('div');
        Productocard.classList.add('card');
        Productocard.innerHTML = `
         <img src="${element.imagen}" alt="">
         <div class="nombreContenedor">
                    <p >${element.nombre}</p>
                    </div>
                    <div class="precio">
                        <p>${element.precio}</p>
                        
                         <i class="fa-solid fa-eraser eliminar" data-id="${element.id}" style="color: #ffffff;"></i>
                       
                        
                    </div>
        
        `;
        Productodata.appendChild(Productocard);
    });

};



const Eliminar = async (e) => {
    e.preventDefault();
    console.log(e.target.classList.contains('eliminar'));
    if (e.target.classList.contains('eliminar')) {
        const id = e.target.dataset.id;
        await eliminarProducto(id);
        CargarProducto();
    }
}






Productoform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const productos = await obtenerProductos();

    const ValidarId = productos.map(producto => parseInt(producto.id, 10));
    const IdMaximo = Math.max(...ValidarId);
    const id = (IdMaximo + 1).toString();


    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    const producto = { nombre, precio, imagen, id };

    console.log(producto);
    await AgregarProducto(producto);
    CargarProducto();
    Productoform.reset();
});



CargarProducto();
Productodata.addEventListener('click', Eliminar);