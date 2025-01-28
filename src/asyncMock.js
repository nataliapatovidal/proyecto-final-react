const products = [
    {
        id: "1",
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        descrip: 'descripcion de Iphone 12',
    },

{   id: "2", 
    name:'Samsung s21', 
    price: 800, 
    category: 'celular', 
    img:'https://samsungar.vtexassets.com/arquivos/ids/191579-1200-auto?width=1200&height=auto&aspect=true',
    stock: 20,
    descrip: 'Nuestra pantalla de desplazamiento más suave con Super Smooth 120Hz Cámara frontal de 32 MP con modo Noche para tus mejores selfies, incluso cuando solo brillan las estrellas Nuestro chip más rápido ahora en el S21 FE Cuidamos el planeta: No incluye cargador',},

    {   id: "3", 
    name:'Tablet pcbox t106 10  " 64 GB gris', 
    price: 1200, 
    category: 'tablet', 
    img:'https://medias.musimundo.com/medias/size515-152373-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wxNjY1NXxpbWFnZS9qcGVnfGFHWTFMMmcyTnk4eE1EWXpPVFEyTkRrNE9EY3dNaTl6YVhwbE5URTFYekUxTWpNM00xOHdNUzVxY0djfDQ4YzYyMWYyYjBhOWQyYjhjNGZjMmViOTI2NjBiNDQxN2JmNjE1MzI1YTFkMTkwYTdhNTFhMTE4ODY3NTEwMTk',
    stock: 30,
    descrip: 'Tablet. Pantalla multitouch de 10", resolucion 1280 x 800, IPS. Procesador Octa Core Allwinner A523 (2GHz). Almacenamiento de 64 GB. Memoria RAM de 4 GB. Camara trasera de 5 MP. Camara frontal 2 MP. Sistema operativo android 14. Conexiones: Wifi 802.11 b/g/n. Bluetooth 5.0. USB Tipo C. Lector de tarjeta microSD. Audio Jack 3.5mm. Bateria 6000 mAh. Cubierta metalica. Tecnologia anti scratch para mayor resistencia a rayones. Incluye cargador.',},

{   id: "4", 
    name:'Notebook', 
    price: 3000, 
    category: 'Notebook', 
    img:'https://medias.musimundo.com/medias/size515-151452-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wyOTE1MXxpbWFnZS9qcGVnfGFEa3lMMmd3TkM4eE1EWTFOREkyT1RFeE1qTTFNQzl6YVhwbE5URTFYekUxTVRRMU1sOHdNUzVxY0djfDM3YTAyNWY3M2U1OTA0YmIzMzRmYzkwN2U2Zjk4YTlmNWRiZTg5ZDc4Y2JjZDA2N2VhYjE3N2M2N2FkOWYwZTE',
    stock: 15,
    descrip: 'Notebook. Pantalla de 14" HD (35,6cm) en diagonal, bisel micro-edge, antirreflectante, 220 nits, 45% NTSC (1366 x 768). Procesador Intel Celeron N4120. Capacidad 256GB. Memoria 8 GB de RAM DDR4-2400 MHz (1 x 8 GB). Placa de video Graficos Intel UHD 600. Conexiones: Wi Fi. Bluetooth. USB. HDMI. Microfono incorporado, entrada para microfono. Lector de tarjeta SD multiformato. Sistema operativo Windows 11. Camara HD HP TrueVision de 720p con microfonos digitales integrados de doble matriz. Bateria de polimero de iones de litio de 3 celdas y 41 Wh (hasta 7 horas y 30 minutos).',},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
        }, 500);
    });
};
