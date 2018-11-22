# Frontend para navegadores web - Práctica 2
> En este proyecto se realiza una primera aproximación a la programación con Angular
> #### [Máster en Ingeniería Web por la Universidad Politécnica de Madrid (miw-upm)](http://miw.etsisi.upm.es)
> #### Asignatura: *FEMW (Frontend para Navegadores Web)*

## Tecnologías necesarias
* HTML5
* CSS3 + Bootstrap
* Angular (Typescript)
* WebStorm
* Github

## Enunciado.

El objetivo de esta segunda práctica es diseñar e implementar la parte de conexión con el servidor utilizando tecnologías 
asíncronas utilizando un entorno de desarrollo específico, en este caso Angular.

La práctica la podemos dividir en las siguientes fases:

### Fase 1: Reestructuración del proyecto de la práctica 1 a componentes Angular.

Recordamos que las partes que se han desarrollado en la práctica 1 y que se pasarán a componentes Angular son:

  1. Inicio

  2. Instalaciones

  3. Servicios (o similares) 

  4. Reservas

  5. Registro 
  
  6. Login


### Fase 2: Implementar la lógica de registro y reservas.

* Registro

Esta opción permitirá al usuario proceder al registro necesario para poder conectarse al sistema y no se podrá ejecutar 
si el usuario se encuentra ya conectado al mismo (ha realizado ya la operación de login con éxito y por tanto dispone 
de un token válido de conexión). Una vez elegida la opción, el sistema deberá mostrar el formulario diseñado a tal 
efecto en la primera práctica. El usuario deberá rellenar el formulario, siendo obligatorios todos los campos excepto 
el de la fecha de nacimiento.

El sistema deberá comprobar la unicidad del nombre de usuario antes de que se proceda al envío de los datos por 
parte del usuario. Para ello, cuando el usuario pase de un campo a otro (el elemento en cuestión pierda el foco), 
se deberá proceder a ejecutar una llamada asíncrona a la API REST disponible pasándole el valor del identificador 
username como parte de la URL:

  * Método: get url: http://fenw.etsisi.upm.es:5555/users/{username}

Las diferentes respuestas a esta petición están disponibles en la documentación indicada

*Una vez pasadas estas comprobaciones* (que en caso de no producir errores pasan inadvertidas para el usuario), el 
usuario debe poder mandar (al pulsar el botón de “enviar”) todos los datos: *“username”, “email”, “password” (todas 
cadenas de caracteres) y “birthDate”* que será la fecha de nacimiento implementada en base a un número entero que se 
corresponde con el número de milisegundos transcurridos desde el 1 de enero de 1970 (getTime() en tipo Date()).

Este envío se realizará, otra vez, a la API REST

  *Método: post url: http://fenw.etsisi.upm.es:5555/users

Las diferentes respuestas a esta petición están disponibles en la documentación indicada.
￼￼
￼￼El sistema debe informar del resultado del proceso final al usuario mediante un pequeño mensaje.

En este apartado se podrá incorporar, de manera optativa, un sistema de garantía de que el registro no se está efectuando 
mediante un programa “robot” con el desplazamiento de una imagen de una caja a otra por “drag&drop” (o sistema similar)

* Reservas

La opción de “Reserva” se refiere a la posibilidad que tiene el usuario de reservar la utilización de una pista de pádel 
en una hora determinada de una fecha concreta siempre y cuando no se encuentre ya reservada. Solamente podrá realizar una 
reserva si previamente el usuario ha realizado la operación de autenticación (login) con éxito (dispone de un token válido). 
Todas las peticiones a las rutas concernientes a la gestión de reservar requieren que se les pase en la cabecera “Authorization” 
el token correspondiente. Un usuario concreto solamente podrá efectuar un máximo de cuatro reservas (hecho del que se encarga la 
API REST y por tanto no hay que comprobar en el cliente).

El alumno podrá elegir el interfaz que se presentará al usuario para poder efectuar las reservas de pistas. 
Por ejemplo, se puede optar por presentar las reservas ya efectuadas (pistas ocupadas) a lo largo de toda la semana (y por 
tanto las que no están ocupadas estarán libres para ser reservadas) o elegir presentar solamente las reservas de un determinado 
día. Por lo tanto, la funcionalidad podría ser algo similar a:

1) El usuario se identifica mediante la opción login y obtiene su token de identificación
2) El usuario elige, de un calendario (un elemento tipo “date” o “datepicker”), una fecha y la envía a la ruta correspondiente 
de la API REST junto con el token que le autoriza. Hay que indicar que, según se puede ver en la documentación, la fecha se deberá 
pasar como un número entero de formato getTime() de javascript (milisegundos transcurridos desde
el 1 de enero de 1970).

El sistema recibe las reservas ya efectuadas para la fecha (o sea, pistas NO disponibles) y muestra las pistas (atención: 
el club dispone de cuatro pistas, numeradas del 1 al 4) y horas disponibles en esa fecha, entre las que el usuario efectuará 
su elección. Una vez elegida, se enviará a la ruta correspondiente la pista elegida y la fecha en número entero, que esta vez 
incluirá la hora (será el getTime de fecha y hora), además del token que le autoriza.

ATENCIÓN: La reservas solamente se podrán hacer por horas completas, a la hora en punto y en horario de 10:00 a 21:00 
(o sea, de 10:00 a 11:00, o de 13:00 a 14:00 o de 16:00 a 17:00, etc)

Las diferentes respuestas a esta petición están disponibles en la documentación indicada.
El alumno es libre de elegir aquella representación en pantalla que considere oportuna en todo el proceso, valorándose 
el diseño de la pantalla de presentación de las reservas disponibles en determinado espacio de tiempo (por días o semanas, etc).

### Anotaciones entorno Angular

## Lanzar el servidor de desarrollo

Para lanzar el servidor que viene incorporado en Angular tenemos que ejecutar `ng serve` y navegar a `http://localhost:4200/` que es la dirección
por defecto. (Nota: si lanzamos `ng serve --open` nos abrirá el navegador y lanzará la URL una vez termine de compilar).

## Generador de código

Angular CLI nos permite generar de forma automática con el comando `ng generate [element] element.name` siendo `[element]`: 

* directive
* pipe
* service
* class
* interface
* enum
* module

## Construir la aplicación

Ejecutamos `ng build` para construir el proyecto. Los artefactos creados se almacenan en la dirección `/dist`. Podemos utilizar el flag
`--prod` para constuirlo para producción.

NOTA: Para más información ejecutar `ng help` o ver la documentación de [Angular cli](https://github.com/angular/angular-cli/blob/master/README.md).
