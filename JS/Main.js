import { AgregarProducto, eliminarProducto, obtenerProductos } from "./service/service.js";


document.addEventListener('DOMContentLoaded', () => {
const Productodata = document.querySelector('[data-producto]');
const Productoform = document.querySelector('[data-form]');



const CargarProducto = async () => {
    const productos = await obtenerProductos();
    Productodata.innerHTML = '';
    productos.forEach(element => {

        
        const Productocard = document.createElement('div');
        Productocard.classList.add('card');
        Productocard.innerHTML = `
         <img src="${element.imagen}" alt="">
         <div class="nombreContenedor">
                    <p>${element.nombre}</p>
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

    let id;

   if(productos.length == 0){
   id = '1';
   }
else{
    const ValidarId = productos.map(producto => parseInt(producto.id, 10));
    const IdMaximo = Math.max(...ValidarId);
    id = (IdMaximo + 1).toString();

}

    
   

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    const producto = { nombre, precio, imagen, id };

    
    await AgregarProducto(producto);
    CargarProducto();
    Productoform.reset();
});



CargarProducto();
Productodata.addEventListener('click', Eliminar);

});