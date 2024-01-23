---
marp: true
theme: uncover
class: invert
paginate: true
footer:
style: |
  section { font-size: 26px; } h1, h2, h3 { color: #e90364; text-shadow: 1px 1px 2px black; } ul { text-align: left; width: 100%; font-size: 24px; list-style: none; } li::before { content: "\2022"; color: #d024c3; font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; text-shadow: 1px 1px 2px black;} li { margin-bottom: .5em} em { color: #fd9f29; }	a, strong, h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong { color: #8514f5; } a { font-style: italic; font-size: .75em; } a:hover { color: #8001c6;} section.p_left p { text-align: left; } section.ul_right ul { text-align: right; } section.h6_right h6 { text-align: right; } section.invert { background-color: #0F0F11 } section.title_with_image h1, section.title_with_image h2, section.title_with_image h3 { display: flex; align-items: center; justify-content: center; } section.img_center p:has(img) { margin: auto; } blockquote { font-size: .75rem; margin: 0 20%; } section.lets_code h1 { color: #43A191;}
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

	1. ¿Qué es Angular?

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

<!-- _class: invert title_with_image -->

## 1. ¿Qué es &nbsp;![width:350px](./Imágenes/Angular%20logo.png)?

&nbsp;

- Es un web framework que permite simplificar y optimizar el desarrollo de aplicaciones rápidas y confiables.
- Proporciona un amplio conjunto de herramientas, API y bibliotecas.
- Mantiene el código organizado con un modelo de componente y un sistema de inyección de dependencias flexible.
- Aplicaciones confiables que escalan con el tamaño dee equipo y el tamaño del código fuente.

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	2. Angular CLI (Command-Line Interface)

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 2. Angular CLI (Command-Line Interface)

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

	3. Ejecutar la aplicación Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## 3. Ejecutar la aplicación Angular

- Para ejecutar la aplicación podemos hacer uso de los scripts en _package.json_

![width:550px](./Imágenes/package.json%20scripts.png)

&nbsp;

| `npm start`                                | `ng serve`                                 |
| ------------------------------------------ | ------------------------------------------ |
| ![width:500px](./Imágenes/npm%20start.png) | ![width:500px](./Imágenes/npm%20start.png) |

---

![width:1050px](./Imágenes/Hello,%20AngularBootCamp.png)

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	4. Herramientas para el desarrollo en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## 4. Herramientas para el desarrollo en Angular

- Visual Studio Code, https://code.visualstudio.com/
- Angular Language Service, https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
- angular2-inline, https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline
- angular2-switcher, https://marketplace.visualstudio.com/items?itemName=infinity1207.angular2-switcher

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	5. Herramientas para desarrollo Web

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## 5. Herramientas para desarrollo Web

- Bookmarks, https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks
- Code Spell Checker, https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- Error Lens, https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
- ESLint, https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier - Code formatter, https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode, `npm i -D prettier`
- Todo Tree, https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	6. Bloques de Construcción en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

---

## 6. Bloques de Construcción en Angular

- **Modules**, (módulos): declaran el _contexto de compilación_ para un conjunto de **componentes** relacionados y dedicados a alguna característica. _Agrupación de **componentes**, **tuberías** y **directivas** relacionadas_. Ayudan al compilador de Angular a resolver correctamente los componentes y unirlos a los elementos DOM apropiados en sus plantillas.

![width:700px](./Imágenes/Angular%20Module.png)

---

<!-- _class: invert p_left -->

### 6.1 Módulos

`ng generate module MyFirstModule --module app --routing --dry-run`

`ng g m MyFirstModule -m app --routing -d`

https://angular.io/cli/generate#module-command

---

- **Directives**, (directivas): es una clase decorada con anotación _@Directive_. Su propósito es agregar cierto comportamiento a elementos en la aplicación Angular.

&nbsp;

![width:1050px](./Imágenes/Angular%20Directive.png)

---

<!-- _class: invert p_left -->

### 6.2 Directivas

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

- **Structural directives**, (Directivas estructurales): Cambian la estructura DOM agregando y eliminando elementos DOM.
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

### 6.3 Componentes

Es un tipo especial de directiva que tiene su propia plantilla y estilos.

&nbsp;

`ng generate component components/MyFirstComponent --module my-first-module --dry-run`

`ng g c components/MyFirstComponent -m my-first-module -d`

&nbsp;

`ng generate component components/MyFirstInlineComponent --module my-first-module --inline-style --inline-template --dry-run`

`ng g c components/MyFirstInlineComponent -m my-first-module.module -s -t -d`

&nbsp;

https://angular.io/cli/generate#component-command

---

- **Data binding**, (vinculación de datos): _sincronización automática de los datos_ entre el modelo y la vista.
  Tenemos dos tipos de _data binding_.
  https://angular.io/guide/binding-syntax
  &nbsp;
  - _Event binding_: manejo de eventos que ocurrieron dentro de la vista de un componente.
  - _Property binding_: cuando tenemos alguna propiedad en el modelo (la clase) y se desea renderizar el valor en la vista. También se conocer como _one-way binding_.
  - _Two-way binding_: permite cambiar también el valor de una propiedad desde la vista. Se utiliza una sintaxis llamada _bananas in a box [()]_.

---

|                                                                         |                                                                           |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![width:450px](./Imágenes/Event%20binding.png) &nbsp; Event binding     | ![width:450px](./Imágenes/Property%20binding.png) &nbsp; Property binding |
| ![width:450px](./Imágenes/Two-way%20binding.png) &nbsp; Two-way binding |

---

- **Services**, (Servicios): son clases simples que están decoradas con la anotación _@Inyectable_ y es donde generalmente se escribe la lógica de negocio. Se aíslan en calase con la intención de reutilizarlas por medio del _Dependency Injection_.
  https://angular.io/guide/architecture-services

&nbsp;

![width:600px](./Imágenes/Angular%20Service.png)

---

<!-- _class: invert p_left -->

### 6.4 Servicios

`ng generate service services/MyFirstService --dry-run`

`ng g s services/MyFirstService -d`

https://angular.io/cli/generate#service-command

---

- **Dependency injection**, (Inyección de dependencias): Mecanismo que es responsable de _crear_, _resolver_ y _proporcionar_ dependencias. Se puede inyectar servicios en todas las clases, directivas y otros servicios.
  https://angular.io/guide/architecture-services#dependency-injection-di

---

- **Pipes**, (Tuberías): son clases que se anotan con la anotación _@Pipe_ y su responsabilidad es la transformación de los datos. Se principalmente en las plantillas de un componente y en muchos casos pueden mejorar el rendimiento de la aplicación.
  https://angular.io/guide/pipes

&nbsp;

![width:700px](./Imágenes/Angular%20Pipe.png)

---

<!-- _class: invert p_left -->

### 6.5 Tuberías

`ng generate pipe pipes/MyFirstPipe --module my-first-module --dry-run`

`ng g p pipes/MyFirstPipe -m my-first-module -d`

https://angular.io/cli/generate#pipe-command

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	7. Detalles sobre los Módulos en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 7. Detalles sobre los Módulos en Angular

- Propósito: ayudar a organizar cosas relacionadas juntas, _components_, _directives_, _pipes_.
- ¿Cómo configurar un NgModule?: se configura al agregar metadatos al decorador _@NgModule_.
  &nbsp;
  - _declarations_: se declaran _components_, _directives_, _pipes_ que estarán disponibles dentro de un módulo. Declarations son esos bloques de construcción de Angular que tienen un selector y son usados en la plantilla de un componente.
  - _imports_: Si el módulo depende de otro módulo, lo podemos importar en esta lista.

---

![width:700px](./Imágenes/Angular%20provider%20example%20fail.png)

This code will not compile

---

- ¿Cómo configurar un NgModule? (continuación)
  - _exports_: Por default las _declarations_ son privadas para un módulo, si deseamos hacerlas públicas tenemos que agregarlas en el campo _exports_.
  - _providers_: es el lugar donde se registran diferentes _services_ e _injection tokens_. Se "necesita" para el _dependency injection_.
  - _bootstrap_: se declaran componentes que se necesitan inicializar en la aplicación, se puede considerar como el _root component_.

---

![width:700px](./Imágenes/Angular%20provider%20example%20success.png)

This code will compile

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	8. Detalles sobre las Directivas en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 8. Detalles sobre las Directivas en Angular

<!-- _class: invert p_left -->

- ¿Cómo podemos proveer o vincular datos a una directiva y/o emitir datos?

https://angular.io/api/core/Input#input

https://angular.io/api/core/Output

|                                                                            |                                                                              |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![width:500px](./Imágenes/Angular%20directive%20example%20input.png) Input | ![width:660px](./Imágenes/Angular%20directive%20example%20output.png) Output |

---

<!-- _class: invert p_left -->

- ¿Qué tipo de selectores podemos usar para una directiva?

https://angular.io/api/core/Directive#selector

|                                                                              |                                                                              |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![width:500px](./Imágenes/Angular%20directive%20selectors%20example%201.png) | ![width:575px](./Imágenes/Angular%20directive%20selectors%20example%202.png) |

---

<!-- _class: invert p_left img_center -->

- ¿Cómo podemos escuchar _DOM events_ del elemento donde adjuntamos la directiva?

https://angular.io/api/core/HostListener

![width:700px](./Imágenes/Angular%20directive%20Hostlistener.png)

---

<!-- _class: invert p_left img_center -->

https://angular.io/api/core/Directive#host

https://angular.io/guide/styleguide#hostlistenerhostbinding-decorators-versus-host-metadata

![width:620px](./Imágenes/Angular%20directive%20Host.png)

---

<!-- _class: invert p_left img_center -->

- ¿Cómo obtener una referencia al elemento _host_ de una directiva?

https://angular.io/api/core/ElementRef

![width:800px](./Imágenes/Angular%20directive%20ElementRef.png)

---

<!-- _class: invert p_left img_center -->

- ¿Qué es el _ciclo de vida_ de un componente (directiva)?

https://angular.io/guide/lifecycle-hooks

Los métodos del ciclo de vida se pueden clasificar en 2. _Lifecycle hooks_ que se llaman sólo una vez y _Lifecycle hooks_ que se llaman de manera continua.

---

- **Secuencia de eventos de ciclo de vida**: Angular llamará automáticamente los métodos (_lifecycle hooks_) que se hayan implementado en el punto apropiado en el ciclo de vida de esa instancia.
  &nbsp;
  - _ngOnChanges_: llamado cada vez que los _inputs_ del componente o directiva se han actualizado.
  - _ngOnInit_: llamado una vez cuando el componente o directiva es inicializado. Se recomienda evitarlo.
  - _ngDoCheck_: llamado cada vez que el mecanismo de _change detection_ se ejecuta.
  - _ngAfterContentInit_: llamado una vez cuando el contenido proyectado es inicializado (proyectado por _ng-content_).
  - _ngAfterContentChecked_: llamado cada vez que Angular verifica el contenido proyectado en la directiva o componente.

---

- _ngAfterViewInit_: llamado una vez cuando la vista de un componente ha sido inicializada.
- _ngAfterViewChecked_: llamado cada vez que Angular verifica las vistas del componente y las vistas de los hijos, o la vista que contiene la directiva.
- _ngOnDestroy_: llamado una vez cuando el componente, directiva va a ser destruido. Importante esté método también existe para pipes y módulos.

---

![width:1150px](./Imágenes/Angular%20component%20lifecycle.png)

---

<!-- _class: invert p_left img_center -->

- ¿Cómo _referenciar elementos_ en las directivas?

https://angular.io/api/core/ContentChild
https://angular.io/api/core/ContentChildren

![width:1000px](./Imágenes/Angular%20directive%20ContentChild.png)

---

<!-- _class: invert p_left img_center -->

https://angular.io/api/core/ViewChild
https://angular.io/api/core/ViewChildren

![width:1100px](./Imágenes/Angular%20directive%20ViewChild.png)

---

<!-- _class: invert p_left img_center -->

- ¿Cómo distinguir una _directiva estructural_ de una _directiva de atributo_?

https://angular.io/guide/structural-directives

Usualmente inician con un _\*_ frente a su nombre

![width:700px](./Imágenes/Angular%20structural%20directive%20example%201.png)

&nbsp;

El _\*_ es un atajo para la siguiente notación equivalente

https://angular.io/api/core/ng-template

![width:700px](./Imágenes/Angular%20structural%20directive%20example%202.png)

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	9. Detalles sobre las Pipes en Angular

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 9. Detalles sobre las Pipes en Angular

<!-- _class: invert p_left img_center -->

&nbsp;

- ¿Cómo utilizar una _pipe_?

![width:800px](./Imágenes/Angular%20pipe%20example.png)

---

<!-- _class: invert p_left img_center -->

Existen 2 tipos de pipes:

- _puras_: ejecutan el método de _transform_ solo cuando la referencia a su valor de entrada se ha cambiado.
- _impuras_. ejecutan el método de _transform_ cada vez que el mecanismo de _change detection_ se ejecuta.

&nbsp;

> Utilizar un método en la clase del componente para transformar datos es equivalente a una _pipe impura_ lo que reduce el rendimiento de la aplicación.

---

<!-- _class: invert p_left img_center -->

- ¿Qué es la _async pipe_?

https://angular.io/api/common/AsyncPipe

Es una pipe incorporada en Angular que permite suscribirse y de suscribirse automáticamente a _observables_. Funciona con _promesas_ también.

![width:800px](./Imágenes/Angular%20async%20pipe%20example.png)

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	10. Notas básicas sobre Typescript

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 10. Notas básicas sobre Typescript

<!-- _class: invert p_left -->

- **Typescript** es un _lenguaje de programación_ y una _herramienta de comunicación_, entre desarrollador y la computadora, desarrollador y desarrollador, o uno mismo.
- **Typescript** es más _descriptivo_ y _preciso_ que JS.
- **TypeScript** es una **forma de comunicarse** con compañeros de equipo y no necesariamente agrega funcionalidad en tiempo de ejecución.
- Un **tipo de datos** es una _colección de valores de datos_ y un _conjunto de operaciones predefinidas_ en esos valores.
- Los **tipos de datos** desaparece cuando _compilamos_ (transpilamos) el código a JS.

&nbsp;

> Use el sistema de tipo TS para expresar claramente la intención del software.

---

<!-- _class: invert p_left -->

### 10.1 _Type_ vs _Interface_

- _type_ es una palabra clave en TypeScript que se utiliza para definir la forma de los datos.
- _interface_ es una palabra clave que define un contrato al que un objeto debe adherirse.

|                                                       |                                                  |
| ----------------------------------------------------- | ------------------------------------------------ |
| ![width:500px](./Imágenes/Typescript%20interface.png) | ![width:480px](./Imágenes/Typescript%20type.png) |

---

<!-- _class: invert p_left img_center -->

### 10.2 Diferencias entre _Type_ e _Interface_

- Podemos crear un _alias type_ para un tipo primitivo (number, string, boolean, null, undefined), pero no podemos crear una interfaz para dar un alias a estos tipos.

![width:400px](./Imágenes/Typescript%20type%20alias.png)

- Los _union types_ nos permiten describir valores que pueden ser uno de varios tipos y crear uniones de varios tipos primitivos, literales o complejos:
- No hay equivalente a un _union type_ en una _interface_. Pero, es posible crear un nuevo _union type_ a partir de dos _interfaces_,

|                                                           |                                                                              |
| --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![width:500px](./Imágenes/Typescript%20union%20types.png) | ![width:380px](./Imágenes/Typescript%20union%20type%20from%20interfaces.png) |

---

<!-- _class: invert p_left img_center -->

### 10.3 _Extends_ vs _Intersection_

- Una _interface_ puede extender una o múltiples interfaces. Utilizando la palabra _extends_, una nueva interfaz puede heredar todas las propiedades y métodos de una interfaz existente y al tiempo que agrega nuevas propiedades.

![width:350px](./Imágenes/Typescript%20interface%20extends.png)

- Para lograr un resultado similar para los tipos, necesitamos usar un operador de intersección (_&_):

![width:600px](./Imágenes/Typescript%20type%20intersection.png)

---

<!-- _class: invert p_left img_center -->

### 10.4 _Declaration merging_

- _Declaration merging_ es una característica exclusiva de las interfaces. Con ella, podemos definir una interfaz varias veces, y el compilador TypeScript fusionará automáticamente estas definiciones en una sola definición de interfaz.

![width:320px](./Imágenes/Typescript%20declaration%20merging.png)

- Los _alias type_ no se pueden fusionar de la misma manera. Si intenta definir el mismo tipo más de una vez, se emitirá un error.

---

<!-- _class: invert p_left img_center -->

### 10.5 _Utility types_

- **TypeScript** proporciona varios _utility types_ para facilitar las transformaciones de tipo comunes. Estas utilidades están disponibles a nivel global.

https://www.typescriptlang.org/docs/handbook/utility-types.html

![width:800px](./Imágenes/Typescript%20utility%20types.png)

---

<!-- •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

	11. Notas básicas sobre SASS

••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• -->

## 11. Notas básicas sobre SASS

<!-- _class: invert p_left -->

- **SASS** es un lenguaje de extensión que se compila a CSS. Extiende el CSS puro, y presenta nuevas características como _variables_, _loops_, _funciones_, _mixins_, _models_ entre otras.
- **SASS** permite hacer los estilos CSS más mantenibles y fáciles de extender.
- **Angular material** utiliza _scss_ como el lenguaje para sus estilos.

---

### 11.1 _SASS variables_

<!-- _class: invert p_left -->

- Las _SASS variables_ son simples: se asigna un valor a un nombre que comienza con _$_, y luego puede consultar ese nombre en lugar del valor en sí.

https://sass-lang.com/documentation/variables/

|                                                 |                                                            |
| ----------------------------------------------- | ---------------------------------------------------------- |
| ![width:500px](./Imágenes/Sass%20variables.png) | ![width:600px](./Imágenes/Sass%20variables%20compiled.png) |

---

### 11.2 _SASS mixins_

<!-- _class: invert p_left -->

- Los _SASS mixins_ permiten definir estilos que se pueden reutilizar en la hoja de estilos.

https://sass-lang.com/documentation/at-rules/mixin/

|                                              |                                                         |
| -------------------------------------------- | ------------------------------------------------------- |
| ![width:320px](./Imágenes/Sass%20mixins.png) | ![width:320px](./Imágenes/Sass%20mixins%20compiled.png) |

---

<!-- _class: invert lets_code -->

# Let's code • Part 1

![width:400px](./Imágenes/Lets%20code.png)
