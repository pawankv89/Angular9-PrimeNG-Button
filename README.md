# Angular9-PrimeNG-Button

### Angular9-PrimeNG-Button for Angular 9 with Prime NG Library

![](https://github.com/pawankv89/Angular9-PrimeNG-Button/blob/main/images/screen_1.png)

## Version 1.0
This Sample for Learning Prime NG Button Module.

```xml

```

## Requirements

### Visual Studio Code 1.58.2

Version: 1.58.2
Date: 2021-07-14T22:09:06.581Z
Electron: 12.0.13
Node.js: 14.16.0
V8: 8.9.255.25-electron.0
OS: Darwin x64 19.4.0

## Links

https://www.primefaces.org/primeng/showcase/#/button

## setup

1) Add primeng & primeicons in dependencies inside package.json

```xml
 "dependencies": {
    "@angular/animations": "~12.0.4",
    "@angular/common": "~12.0.4",
    "@angular/compiler": "~12.0.4",
    "@angular/core": "~12.0.4",
    "@angular/forms": "~12.0.4",
    "@angular/platform-browser": "~12.0.4",
    "@angular/platform-browser-dynamic": "~12.0.4",
    "@angular/router": "~12.0.4",
    "rxjs": "~6.6.0",
    "tslib": "^2.1.0",
    "zone.js": "~0.11.4",
    "primeng": "^11.0.0",
    "primeicons": "^4.1.0"
  }
  ```

2) Add primeng & primeicons css in styles inside angular.json

```xml

 "styles": [
              "src/styles.scss",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/saga-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ]
```

3) Add Prime NG ButtonModule in your Component or module file

```xml
import {ButtonModule} from 'primeng/button';
```

4) Add Button in your html file

```xml
<p-button (onClick)='clickButton()'>Button Click Me</p-button>
```
5) install prime ng in your project

```xml
npm install
```

## Run Code your Machine

ng serve

## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).

## Change-log

A brief summary of each this release can be found in the [CHANGELOG](CHANGELOG.mdown). 
