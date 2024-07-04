const url = 'http://localhost:3000/productos';

const obtenerProductos = async ()=>{
    const reponse = await fetch(url);
    
    return await reponse.json();
}



const AgregarProducto = async (producto) =>{
    await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(producto)
    });
};

const eliminarProducto = async (id) => {
    await fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE'
    });
};



export {obtenerProductos , AgregarProducto , eliminarProducto}