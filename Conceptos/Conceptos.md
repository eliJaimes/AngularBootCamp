---
marp: true
theme: uncover
class: invert
paginate: true
footer:
style: |
  section { font-size: 26px; } h1, h2, h3 { color: #e90364; text-shadow: 1px 1px 2px black; } ul { text-align: left; width: 100%; font-size: 24px; list-style: none; } li::before { content: "\2022"; color: #d024c3; font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; text-shadow: 1px 1px 2px black;} li { margin-bottom: .5em} em { color: #fd9f29; }	a, strong, h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong { color: #8514f5; } a { font-style: italic;} a:hover { color: #8001c6;} section.p_left p { text-align: left; } section.ul_right ul { text-align: right; } section.h6_right h6 { text-align: right; } section.invert { background-color: #0F0F11 } section.title_with_image h1, section.title_with_image h2, section.title_with_image h3 { display: flex; align-items: center; justify-content: center; }
---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Angular Boot Camp

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

<!-- _backgroundColor: #000 -->
<!-- _class: invert p_left h6_right -->

# Angular Boot Camp

&nbsp;
Presentan:
&nbsp;

- Edgardo Robledo
- Eli Jaimes
- Rogelio Perez
- Saul Dennis

&nbsp;

###### **Enero 2024**

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Qué es Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

<!-- _class: invert title_with_image -->

## Qué es &nbsp;![width:350px](./Imágenes/Angular%20logo.png)

&nbsp;

- Es un web framework que permite simplificar y optimizar el desarrollo de aplicaciones rápidas y confiables.
- Proporciona un amplio conjunto de herramientas, API y bibliotecas.
- Mantiene el código organizado con un modelo de componente y un sistema de inyección de dependencias flexible.
- Aplicaciones confiables que escalan con el tamaño dee equipo y el tamaño del código fuente.

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Angular CLI

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## Angular CLI (Command-Line Interface)

- Se utiliza para _inicializar_, _desarrollar_ y _mantener_ aplicaciones Angular directamente desde un shell de comandos.
- Instale el CLI utilizando NPM (Node Package Manager)

`npm install -g @angular/cli`

- Invoca la herramienta en la línea de comando a través del ejecutable _ng_.

`ng --help`

- Crearemos la aplicación que utilizaremos a lo largo del curso

`ng new AngularBootCamp --standalone false --skip-git --dry-run`

`ng new AngularBootCamp --standalone -g -d`

- https://angular.io/cli

---

![width:1050px](./Imágenes/Create%20application.png)

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Ejecutar la aplicación Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## Ejecutar la aplicación Angular

- Para ejecutar la aplicación podemos hacer uso de los scripts en _package.json_

![width:550px](./Imágenes/package.json%20scripts.png)

&nbsp;

| `npm start`                                | `ng serve`                                 |
| ------------------------------------------ | ------------------------------------------ |
| ![width:500px](./Imágenes/npm%20start.png) | ![width:500px](./Imágenes/npm%20start.png) |

---

![width:1050px](./Imágenes/Hello,%20AngularBootCamp.png)

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Herramientas para el desarrollo en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## Herramientas para el desarrollo en Angular

- Visual Studio Code, https://code.visualstudio.com/
- Angular Language Service, https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
- angular2-inline, https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline
- angular2-switcher, https://marketplace.visualstudio.com/items?itemName=infinity1207.angular2-switcher

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Herramientas para desarrollo Web

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## Herramientas para desarrollo Web

- Bookmarks, https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks
- Code Spell Checker, https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- Error Lens, https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
- ESLint, https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier - Code formatter, https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode, `npm i -D prettier`
- Todo Tree, https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	Bloques de Construcción en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## Bloques de Construcción en Angular

- **Modules**, (módulos): declaran el _contexto de compilación_ para un conjunto de **componentes** relacionados y dedicados a alguna característica. _Agrupación de **componentes**, **tuberías** y **directivas** relacionadas_. Ayudan al compilador de Angular a resolver correctamente los componentes y unirlos a los elementos DOM apropiados en sus plantillas.

![width:700px](./Imágenes/Angular%20Module.png)

---

<!-- _class: invert p_left -->

### Módulos

`ng generate module MyFirstModule --module app --routing --dry-run`

`ng g m MyFirstModule -m app --routing -d`

https://angular.io/cli/generate#module-command

---

- **Directives**, (directivas): es una clase decorada con anotación _@Directive_. Su propósito es agregar cierto comportamiento a elementos en la aplicación Angular.

&nbsp;

![width:1050px](./Imágenes/Angular%20Directive.png)

---

<!-- _class: invert p_left -->

### Directivas

`ng generate directive directives/MyFirstDirective --module my-first-module --dry-run`

`ng g d directives/MyFirstDirective -m my-first-module -d`

https://angular.io/cli/generate#directive-command

---

<!-- _class: invert p_left -->

https://angular.io/guide/built-in-directives

Existen 3 tipos de directivas en Angular:

&nbsp;
&nbsp;

- **Attribute directive**, (Directiva de atributos): cambian la apariencia o el comportamiento de un elemento, componente u otra directiva. https://angular.io/guide/built-in-directives#built-in-attribute-directives
  &nbsp;
  - _NgClass_: Agrega y elimina un conjunto de clases de CSS.
  - _NgStyle_: Agrega y elimina un conjunto de estilos HTML.
  - _NgModel_: Agrega _two-way data binding_ (datos vinculados en ambos sentidos) a un elemento de formulario HTML.

---

- **Structural directives**, (Directivas estructurales): Cambie la estructura DOM agregando y eliminando elementos DOM.
  https://angular.io/guide/built-in-directives#built-in-structural-directives
  &nbsp;
  - _NgIf_: Condicionalmente crea o elimina las sub vistas en la plantilla.
  - _NgFor_: Repite un nodo para cada elemento en una lista.
  - _NgSwitch_: Un conjunto de directivas que cambian entre vistas alternativas.

---

- **Components**, (Componentes): Usado con una plantilla.Este tipo de directiva es el tipo de directiva más común. Los componentes son los principales bloques de construcción para aplicaciones Angular.
  https://angular.io/guide/component-overview

&nbsp;

![width:500px](./Imágenes/Lego%20blocks.png)

---

<!-- _class: invert p_left -->

### Componentes

Es un tipo especial de directiva que tiene su propia plantilla y estilos.

&nbsp;

`ng generate component components/MyFirstComponent --module my-first-module --dry-run`

`ng g c components/MyFirstComponent -m my-first-module -d`

&nbsp;

`ng generate component components/MyFirstInlineComponent --module my-first-module --inline-style --inline-template --dry-run`

`ng g c components/MyFirstInlineComponent -m my-first-module.module -s -t -d`

&nbsp;

https://angular.io/cli/generate#component-command
