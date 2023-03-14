# Prueba desarrollador
Prueba desarrollador - Creación de proyecto en Angular
Creación de frontend desde Angular.

*EJECUCIÓN DE COMANDOS*

Para la creación del proyecto angular.
ng new frontend

Para la creación de un servidor de desarrollo
ng serve

*Instalación de boostrap*
---------------------------
npm i bootstrap@5.3.0-alpha1

Se agregó la lb de estilos de boostrap al proyecto.

*Estructura del proyecto*
--------------------------
Creación de carpetas: Components, interfaces, services, shared, utils.

Creación de componentes en carpeta components: login, signIn, dashboard, navbar

Creación de componente en la carpeta shared: spinner

*Diseñar la interfaz de inicio*
--------------------------------

Se agregan estilos css en login.c.css y style.css (para hacerlo de manera global dentro de nuestro proyecto)

Modificaciones dentro del login.c.css

Agregamos carpeta img para incertar imagenes que necesitamos.
Agregamos formularios de bootstrap para el usuario y password y agregamos estilos dentro del archivo css.

*Ruteo y registrar usuario HTML* 
-------------------------------

Se crearon las rutas y rediccionamos la ruta login y también cuando la ruta no existe te redirecciona a login.

Pasamos el css al style.css que es el archivo global de nuestro proyecto.

*Sign diseño*
--------------

SignIn se crean unos formularios para el registro de los usuarios.

*Login diseño*
---------------
Login creado y se hicieron validaciones con JWT
