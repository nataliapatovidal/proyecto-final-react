const products = [
    {
        Id: "1",
        name: 'Iphone 12',
        price: 5000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        descrip: 'descripcion de Iphone 12',
    },

    {   Id: "2", 
        name:'Samsung s21', 
        price: 1500, 
        category: 'celular', 
        img:'https://samsungar.vtexassets.com/arquivos/ids/191579-1200-auto?width=1200&height=auto&aspect=true',
        stock: 20,
        descrip: 'Nuestra pantalla de desplazamiento más suave con Super Smooth 120Hz Cámara frontal de 32 MP con modo Noche para tus mejores selfies, incluso cuando solo brillan las estrellas Nuestro chip más rápido ahora en el S21 FE Cuidamos el planeta: No incluye cargador',},

    {   Id: "3",
        name:'Motorola Edge 50 Fusion - XT2429-1 AZUL',
        price: 3000,
        category:'celular',
        img:'https://medias.musimundo.com/medias/size515-151459-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wyNjk4NXxpbWFnZS9qcGVnfGFEWmpMMmhsWXk4eE1EWXpPRFk1TVRBM05EQTNPQzl6YVhwbE5URTFYekUxTVRRMU9WOHdNUzVxY0djfDkzZjU1YmRlNDMzMDA2NTViZDE3YWE5YTlmNDg2NjJiNmM1YTA3YmI2ODYxMTZkMTQwM2RkMWQzN2Y4ZjAwNTI',
        stock: 30,
        descrip: 'Celular. Pantalla pOLED de 6.67" (20:9), FHD+ (1080 x 2400) 395ppi, HiD, 120 Hz. Vidrio corning gorilla glass 5 3D. Procesador Qualcomm Snapdragon 6 Gen 1 (SM6450), Octa core (2.2 GHz). Capacidad 256 Gb. RAM 8 Gb (hasta 16 Gb con RAMBoost). Camara Principal: 50 MP (84.1) F1.88, Gran angular y macro: 13 MP (120) F2.2. Zoom combinado (10x fotos / 6x videos) sensor Sony LYTIA. Flash LED. Camara frontal 32 MP (80.53) F2.45. Conexiones: Wi Fi 802.11 a/b/g/n/ac - WIFI 5 (2.4 y 5 Ghz). Bluetooth 5.2. NFC. USB-C 2.0 / OTG. Sistema operativo Android 14. Bateria de 5000 mAh. Sensores: acelerometro, de proximidad, brujula, giroscopio, huella dactilcar (bajo display), luz ambiente, desbloqueo facial. GPS, AGPS, Glonass, Galileo, Beidou. Resistencia IP68. Incluye cargador turbopower de 68W. '},

    {   Id: "4", 
        name:'Pcbox t106 10  " 64 GB gris', 
        price: 7000, 
        category: 'tablet', 
        img:'https://medias.musimundo.com/medias/size515-152373-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wxNjY1NXxpbWFnZS9qcGVnfGFHWTFMMmcyTnk4eE1EWXpPVFEyTkRrNE9EY3dNaTl6YVhwbE5URTFYekUxTWpNM00xOHdNUzVxY0djfDQ4YzYyMWYyYjBhOWQyYjhjNGZjMmViOTI2NjBiNDQxN2JmNjE1MzI1YTFkMTkwYTdhNTFhMTE4ODY3NTEwMTk',
        stock: 30,
        descrip: 'Tablet. Pantalla multitouch de 10", resolucion 1280 x 800, IPS. Procesador Octa Core Allwinner A523 (2GHz). Almacenamiento de 64 GB. Memoria RAM de 4 GB. Camara trasera de 5 MP. Camara frontal 2 MP. Sistema operativo android 14. Conexiones: Wifi 802.11 b/g/n. Bluetooth 5.0. USB Tipo C. Lector de tarjeta microSD. Audio Jack 3.5mm. Bateria 6000 mAh. Cubierta metalica. Tecnologia anti scratch para mayor resistencia a rayones. Incluye cargador.'},

    {   Id: "5", 
        name:'X-VIEW PROTAB 10 64 GB NEGRO', 
        price: 8500, 
        category: 'tablet', 
        img:'https://medias.musimundo.com/medias/size515-180254-01.png?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3w2NTQ5MjJ8aW1hZ2UvcG5nfGFHUTBMMmhsTXk4eE1EWTBPVEkwTURVMk56Z3pPQzl6YVhwbE5URTFYekU0TURJMU5GOHdNUzV3Ym1jfDc1NjM3MjdkOGVkZjM3ZGE2YzNkMmJmYjQ5YTdiOWRmNDgzOWYxNWViZjAzYTk1ZTUyN2FiOWExODliMWJhMWY',
        stock: 33,
        descrip: 'Tablet. Pantalla de 8.7" TFT. Resolucion 1380 x 800 (WXGA+) 60 Hz. Display 16M. Procesador MTK MT8781(G99) Octa core (2.2GHz,2GHz). Capacidad 64 Gb (expandible hasta 1 Tb). RAM 4 Gb. Camara principal de 8 Mp, focus. Camara frontal 2 Mp. Sistema operativo Android. Conexiones: Wi Fi 802.11 a/b/g/n/ac 2.4G+5GHz, VHT80. Bluetooth 5.3. 4G LTE. USB 2.0. Entrada para auricular de 3.5mm. Lector de tarjetas Micro SD. Bateria de 5100 mAh. GPS, Glonass, Beidou, Galileo, QZSS. Sensores: acelerometro, geomagnetico, sensor de luz y de proximidad.'},

    {   Id: "6", 
        name:'LENOVO TAB PLUS ZADX0124AR 11.5 " 128 GB GRIS', 
        price: 9500, 
        category: 'tablet', 
        img:'https://medias.musimundo.com/medias/size515-152202-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wyNTYwMnxpbWFnZS9qcGVnfGFHTmlMMmhqWWk4eE1EWXpPVEk1TXpJMU1UWXhOQzl6YVhwbE5URTFYekUxTWpJd01sOHdNUzVxY0djfDVlZDAyODJiNWY1MDRkNzliN2NjYzM3MDQwNDJjZjM0MDc4MGYyMWVkNDlmZGYzMzNlZTdkMGIwNTgwMzgzZmY',
        stock: 35,
        descrip: 'Tablet. Pantalla de 11.5", IPS 400nits, 72% NTSC, 90Hz. Resolucion 2000x1200. Procesador MediaTek Helio G99 (8C, 2x A76 @2.2GHz + 6x A55 @2.0GHz). Almacenamiento de 128GB UFS 2.2. Memoria RAM de 8GB Soldered LPDDR4x. Camara principal 8 MP y trasera de 8 MP. Graficos GPU Mali-G57 MC2 con brazo integrado. Sistema operativo Android 14. Conexiones: Wi-Fi 5, 802.11ac 1x1 + Bluetooth 5.2. Puertos estandar 1x USB-C (USB de alta velocidad / USB 2.0). 1 Conector combinado para auriculares/microfono (3,5 mm). GPS + GLONASS + Galileo. Lector de tarjeta microSD. Sonido: Altavoces Hi-Fi Octa JBL (sonido de JBL), 4 x tweeters, 4 x unidades de bajos con balance de fuerza, Dolby Atmos. Modo de altavoz Bluetooth. Sensores: acelerometro (G), sensor de luz ambiental, Sensor de giroscopio. Resistente al polvo y al agua: IP52. Bateria Integrada 8600 mAh / Carga 45W.'},

        

    {   Id: "7", 
        name:'HP 14-DQ0535LA Intel celeron ', 
        price: 8000, 
        category: 'Notebook', 
        img:'https://medias.musimundo.com/medias/size515-151452-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wyOTE1MXxpbWFnZS9qcGVnfGFEa3lMMmd3TkM4eE1EWTFOREkyT1RFeE1qTTFNQzl6YVhwbE5URTFYekUxTVRRMU1sOHdNUzVxY0djfDM3YTAyNWY3M2U1OTA0YmIzMzRmYzkwN2U2Zjk4YTlmNWRiZTg5ZDc4Y2JjZDA2N2VhYjE3N2M2N2FkOWYwZTE',
        stock: 15,
        descrip: 'Notebook. Pantalla de 14" HD (35,6cm) en diagonal, bisel micro-edge, antirreflectante, 220 nits, 45% NTSC (1366 x 768). Procesador Intel Celeron N4120. Capacidad 256GB. Memoria 8 GB de RAM DDR4-2400 MHz (1 x 8 GB). Placa de video Graficos Intel UHD 600. Conexiones: Wi Fi. Bluetooth. USB. HDMI. Microfono incorporado, entrada para microfono. Lector de tarjeta SD multiformato. Sistema operativo Windows 11. Camara HD HP TrueVision de 720p con microfonos digitales integrados de doble matriz. Bateria de polimero de iones de litio de 3 celdas y 41 Wh (hasta 7 horas y 30 minutos).'},

    {   Id: "8", 
        name:'HP 14-DQ0515LA Intel celeron', 
        price: 9000, 
        category: 'Notebook', 
        img:'https://medias.musimundo.com/medias/size515-149328-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3w1MzI1OXxpbWFnZS9qcGVnfGFHVTRMMmcxWlM4eE1EWTFOREl6TVRneU1qTTJOaTl6YVhwbE5URTFYekUwT1RNeU9GOHdNUzVxY0djfGM4NWVjNzkwM2M1ZGM3NjA0YzI1NzMzODkzODU2ZTIyY2FiOGZiZTJhOThmNWE1NmMzYzBiZDYyMjQyYzM0YzA',
        stock: 10,
        descrip: 'Notebook. Pantalla de 14" (35,6 cm) en diagonal con microbordes, HD (1366x768), BrightView, 220 nits, 45% NTSC. Procesador Intel Celeron N4120 (frecuencia de velocidad de 1.10 hasta 2,6 GHz, 4 MB de cache L2, 4 nucleos, 4 subprocesos). Almacenamiento de 256 GB SSD. Memoria de 4 GB de RAM DDR4-2400 MHz (1 x 4 GB). Placa de video Integrada: Graficos Intel UHD 600. Conexiones: Wifi 802.11a/b/g/n/ac (1x1). Bluetooth 4.2. Compatible con MU-MIMO. Compatible con Miracast. 1 USB 3.1 Tipo-C Gen1 (solo transferencia de datos, hasta 5 Gb/s de velocidad de senalizacion). 2 USB 3.1 Tipo-A Gen1 (solo transferencia de datos). 1 pin de CA inteligente. 1 HDMI 1.4b. 1 combinacion de auriculares y microfono. 1 lector de tarjetas SD multiformato. Sistema operativo windows 11 home. Camara HD HP TrueVision de 720p con microfonos digitales integrados de doble matriz. Bateria: Iones de litio de 3 celdas y 41 Wh. Duracion: Hasta 10 horas y 15 minutos. Admite carga rapida de la bateria: aproximadamente un 50 % en 45 minutos.'},
    
    {   Id: "9", 
        name:'ASUS VIVOBOOK 15 X1502ZA-EJ294W Intel core I5', 
        price: 10000, 
        category: 'Notebook', 
        img:'https://medias.musimundo.com/medias/size515-146833-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wyNTEzMXxpbWFnZS9qcGVnfGFEQTFMMmc0Wmk4eE1EWXpOVGN6T0RJMU1USTVOQzl6YVhwbE5URTFYekUwTmpnek0xOHdNUzVxY0djfGNhYWI4ZGVlYTQzZGVjNjNmNDM0NzRhZjk1NTIwYzRhNWRkZTRkYTZjMjQ0NWZjNTk5ZWNkYWUwOTUzNDIyZjA',
        stock: 10,
        descrip: 'Notebook. Pantalla LED Backlit de 15.6" FHD (1920 x 1080) Relacion aspecto 16:9. Procesador intel Core i5-1240P (1.7 GHz) 12 nucleos. (12M cache, hasta 4.4 GHz, 4P +8E cores). Sistema operativo Windows 11 home. Placa de video Intel UHD Graphics. Capacidad 256 Gb M.2 2280 PCle 3.0 SSD / RAM 8 Gb DDR4 on board. Expansion 1x DDR4 SO-DIMM slot1x M.2 2280 PCIe 4.0x4. Camara web 720p HD. Wi-Fi 5(802.11ac) (Dual band) 1*1 + Bluetooth 4.1. Puertos: 1x USB 2.0 Type-A, 1x USB 3.2 Gen 1 Type-C, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, 1x DC-in. Entrada para microfono. Microfono incorporado. Bateria 42WHrs, 3S1P, 3-cell Li-ion.'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.Id === productsId))
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
