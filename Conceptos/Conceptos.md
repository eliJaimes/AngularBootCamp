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
