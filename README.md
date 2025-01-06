# Web Responsive Rafel-Yesua
     Página Web Responsive creada por Rafel Amengual Tomás y Yesua Ibañez Castrillo
## Estructura de carpetes i arxius que conformen la pàgina web.
    La estructura que presentamos es la siguiente:
    1. En el directorio raiz de la web estaran los documentos HTML, junto con las capetas que contendran los archivos CSS y las imagenes(CSS y Multimedia).
    2. Dentro de la carpeta CSS tendremos un archivo css que contendra los estilos de la página en cuestión,
       para las páginas especiales como la de Zelda o Mario están en otro archivo para evitar problemas con los estilos.
    3.  En la carpeta Multimedia guardaremos las imágenes principales que se han usado en la web.
## Tecnologies utilitzades en el desenvolupament de la pàgina web.
    Las herramientas que hemos utilizado para el desarrollo de la página son:
        Visual Studio Code
         Plugins:
          - Live Preview
        Photoshop
        
## Enumerar les característiques i funcionalitats principals de la pàgina web.
     Características y Funcionalidades:
     - Imagenes
     - Sonido de fondo en la página principal
     - Barra de navegación inteligente
     - Links interactivos con redireccionamiento
     - Elementos con Imagenes y texto
     - Botónes para consultar información
## Captures de Pantalla: S'han d'agregar captures de pantalla rellevants de la pàgina web de diferents seccions d'aquesta.
     Barra de Navegación clasica:
 
![image](https://github.com/RafelAm/Web-Responsive-Rafel-Yesua/assets/147522281/7e5e10da-4380-4742-aee0-6e2cc8053f74)
***
     Diseño de los diferentes apartados de la web:

![image](https://github.com/RafelAm/Web-Responsive-Rafel-Yesua/assets/147522281/0494ce1a-5d78-4187-9d9f-dee0fd007c24)
***
![image](https://github.com/RafelAm/Web-Responsive-Rafel-Yesua/assets/147522281/34983d69-c082-4fed-9fa3-a35d6f134c88)

***
     Diseño Responsive: 

![image](https://github.com/RafelAm/Web-Responsive-Rafel-Yesua/assets/147522281/fcd483e7-67ff-4936-9825-a4a5830fd63b)



## Divisió de les tasques: S'ha de detallar i explicar la distribució de les tasques dutes a terme per cada membre del grup, destacant les responsabilitats específiques, contribucions individuals i el treball conjunt.
     División de tareas:

     Rafel Amengual Tomás:
     - Diseño de las imagenes de Index.html y Zelda.html
     - Desarollo del index y Zelda en html y css en tamaño por defecto.
     - Desarollo del Diseño responsive en la página de Mario.html
     - Limpieza del contenido sobrante

     Yesua Ibañez Castrillo:
     - Diseño de las imagenes de Mario.html
     - Desarollo de Mario.html en tamaño por defecto
     - Desarollo del Diseño responsive de Index.html y Zelda.html
     - Diseño y Desarollo de la NavBar en Responsive y tamaño por defecto
     - Fusionar todo el contenido de la web
     


     Trabajo conjunto:
     - Planteamiento de la web
     - Planteamiento del diseño de la web
     - Codigo comentado de todas los archivos
     - Planteamiento del contenido de la página web
     - Revisión de todo el codigo en busqueda de fallos y bugs
     
     
| Tareas | Yesua | Rafel | Rafel y Yesua|
|----------|----------|----------|----------|
|Planteamiento de la web| - | - | 2h|
|Planteamiento del diseño de la web| - | - | 3h |
|Diseño Responsive| 7h | 2h | - |
|Diseño de imagenes| 1h | 4h | - |
|Comentar codigo| - | - | 2h |
|Busqueda de fallos y bugs| 2h | 1h | - |
|Fusión del contenido| 5h | - | - |
|Desarollo de HTML| 7h | 10h | - |
|Desarollo de CSS| 6h | 4h | - |


# 2 Trimestre
     En este segundo trimestre se implementa una página nueva (Contact.html) 
     junto con una serie de funciones JS para hacer que la web sea más dinámica e interactúe más con el usuario.
     Todos los archivos de JavaScript se guardarán en una carpeta llamada Scripts.

## Contact.html
     En esta página creada en este Sprint contamos con un formulario en el cual,
     el usuario podrá poner una serie de información y posteriormente enviarla
     (actualmente solo válida que cumple los criterios del formulario).
     En dicho formulario los campos que validamos son:
          • Nombre: que sean mínimo de 4 caracteres y que combine mayúsculas, minúsculas y números.
          • Email: que delante del @ tenga algún carácter y después de él que también tenga caracteres seguidos de un punto.
          • Teléfono: solo acepta números y con una longitud de 9 campos

     También hemos implementado un botón en la barra de navegación para cambiar la paleta de colores del formulario,
     por defecto se visualiza con un estilo “Mario”, si el usuario hace clic se modificará a un estilo “Luigi”.
     Esto lo realizará el archivo JS de cambio-form.js
![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/b771f671-0c44-4ce4-81bf-d329c48a3c74)

     Botón que cambia el color del form y de mini Mario
     
![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/6d45605e-3e21-4ef6-890e-ef12190702ea)

## MODIFICACIÓN DE INDEX.HTML

     Optamos por eliminar en toda la web el audio implementado en el Sprint 1 y modificamos el Nav.
     Añadimos en la página un nuevo apartado, el cual es un formulario donde el usuario a de poner su nombre y un comentario.
     Dicho formulario lo valida el archivo comentario.js, verifica que ambos campos están correctos y 
     en caso de que el usuario quiera modificar el mensaje, pueda cambiarlo.

     Si el formulario se ha enviado correctamente, se comportará de una manera en versión móvil y ordenador.
     En versión móvil se notificará al usuario mediante una alerta, por contra parte,
     la del ordenador añadirá un campo justo debajo de él.

![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/4c9dad68-1d3e-4bb4-8e0a-32550e68acdd)

     Con comentarios

![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/6b476e9c-821f-470c-9ed8-7d9ff161b26e)

# MODIFICACIÓN DE ZELDA.HTML
     Implementamos un carrusel en el primer apartado y 
     se realizan cambio en el estilo.
     El carrousel se ha realizado con un script de JavaScript y sin usar JQuery

     Carrousel

![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/b06ffb87-61a6-454c-b6c1-43e3ea2eab45)

![image](https://github.com/RafelAm/Web-Responsive-JS-Rafel-Yesua/assets/147522281/4b0f0a84-f9d1-46ff-a0ec-13fd0f432087)

     
| Tareas | Yesua | Rafel | Rafel y Yesua|
|----------|----------|----------|----------|
|Planteamiento de la web| 1h | 1h | 2h|
|Planteamiento del diseño de la web| 1h | 1h | 3h |
|Diseño Responsive| 4h | 6h | - |
|Diseño de imagenes| 1h | 1h | - |
|Busqueda de fallos y bugs| 3h | 1h | - |
|Fusión del contenido| 2h | 3h | - |
|Desarollo de HTML| 3h | 3h | - |
|Desarollo de CSS| 9h | 7h | - |
|Desarollo de JS| 6h | 1h | - |
