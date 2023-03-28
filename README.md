# Prueba desarrollador
Prueba desarrollador - Creación de proyecto en Angular
Creación de frontend desde Angular.

"dependencies": {
    "@angular/animations": "^15.2.2",
    "@angular/common": "^15.1.0",
    "@angular/compiler": "^15.1.0",
    "@angular/core": "^15.1.0",
    "@angular/forms": "^15.2.2",
    "@angular/platform-browser": "^15.1.0",
    "@angular/platform-browser-dynamic": "^15.1.0",
    "@angular/router": "^15.1.0",
    "@ng-bootstrap/ng-bootstrap": "^14.0.1",
    "bootstrap": "^5.3.0-alpha1",
    "chart.js": "^4.2.1",
    "ng2-charts": "^4.1.1",
    "ngx-bootstrap": "^10.2.0",
    "ngx-toastr": "^16.1.0",
    "rxjs": "~7.8.0",
    "toastr": "^2.1.4",
    "tslib": "^2.3.0",
    "zone.js": "~0.12.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^15.1.6",
    "@angular/cli": "~15.1.6",
    "@angular/compiler-cli": "^15.1.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.9.4"
  }


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
