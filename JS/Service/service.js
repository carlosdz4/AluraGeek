const url = 'https://api-fake-amber.vercel.app/productos';

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
    await fetch(`https://api-fake-amber.vercel.app/productos/${id}`, {
        method: 'DELETE'
    });
};



export {obtenerProductos , AgregarProducto , eliminarProducto}