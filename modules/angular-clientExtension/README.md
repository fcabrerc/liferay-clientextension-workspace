# AngularClientExtension

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Crear liferay worksapce
- Suponemos que tenemos un liferay worksapce para nuestro proyecto

## Pasos iniciales para crear el módulo
```
cd liferay-clientextension-workspace
cd modules
ng new angular-clientExtension --experimental-zoneless

```
https://angular.dev/guide/experimental/zoneless
```
cd angular-clientExtension
npm uninstall zone.js
npm i @angular/material
npm i @angular/cdk

```
- Añadir el archivo client-extension.yaml  

## Modificaciones en el código generado

### Directorio raíz
- En **tsconfig.json**  
Añadir la propiedad "baseUrl" en "compilerOptions".   
- En **package-lock.json**  
Quitar las referencias a zone.js  
- En **package.json**  
Quitar ""test": "ng test"" de scripts  

### Directorio src/app
- En **app.component.ts**  
Cambiar la propiedad 'selector'. Poner el nombre del módulo.  
- En **app.config.ts**   
Añadir APP_BASE_HREF.  
Con esta configuración, APP_BASE_HREF se ajustará dinámicamente a la URL actual de la página, lo que permitirá que tu aplicación Angular funcione correctamente en cualquier URL base donde se cargue el portlet.   
- En **app.routes.ts**  
Añadir las rutas que se necesiten.  
- En **app.component.html**  
Borrar todo, dejando sólo ```<router-outlet />```   

## Crear el código necesario
- Añadir los componentes que se necesiten

## Compilar el código
```
..\..\gradlew :modules:angular-clientExtension:clean :modules:angular-clientExtension:build 
```

## Desplegar el módulo
- FTP a la carpeta deploy  

## Ir a liferay 
- Crear una página  
- Añadir el portlet creado  
