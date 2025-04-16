# 🎭 Proyecto de Pruebas Automatizadas con Playwright


Este repositorio contiene un conjunto de **pruebas automatizadas de extremo a extremo (E2E)** utilizando [**Playwright**](https://playwright.dev/) con **TypeScript**. El objetivo es aprender y demostrar cómo automatizar interacciones básicas con una página web.

---

## 🗂️ Estructura del Proyecto

```plaintext
playwright-first-project/                  # Proyecto de pruebas automatizadas con Playwright y TypeScript
├── allure-results/                        # Resultados generados por Allure tras ejecución de pruebas
├── node_modules/                          # Dependencias instaladas con npm
├── playwright-report/                     # Reporte HTML autogenerado por Playwright tras correr pruebas
├── test-results/                          # Carpeta con resultados de ejecución de las pruebas
├── tests/                                 # Carpeta principal para casos de prueba
│   └── example.spec.ts                    # Prueba de ejemplo con navegación y aserción
├── .gitignore                             # Archivos y carpetas ignorados por Git
├── package.json                           # Declaración de scripts, dependencias y configuración general
├── package-lock.json                      # Registro de versiones exactas de dependencias instaladas
├── playwright.config.ts                   # Archivo principal de configuración de Playwright
└── README.md                              # Documentación principal del proyecto
```

---

## 📄 Clase de Pruebas Automatizadas

📁 Archivo: `tests/example.spec.ts`

Contiene una suite con dos pruebas básicas:

1. ✅ **Abrir la página de Playwright Java**  
   Valida que la página carga correctamente y su título contiene el texto `"Playwright"`.

2. 🔗 **Navegar al enlace Get Started**  
   Simula un clic en el enlace y verifica que se muestre el encabezado `"Installation"`.

---

## ⚙️ Tecnologías Utilizadas

- 🎭 [Playwright](https://playwright.dev/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 🟢 [Node.js](https://nodejs.org/)
- 📊 [Allure Reporter (opcional)](https://github.com/allure-framework/allure-js)

---

## 🚀 ¿Cómo ejecutar las pruebas?

1. 📦 Instala las dependencias:

```bash
npm install
```
2.▶️ Ejecuta las pruebas:
```bash
npx playwright test
```
3. 📁 Abre el reporte HTML:
```bash
npx playwright show-report
```
---


## 🌐 Pruebas Multi-Navegador
Playwright permite ejecutar pruebas en múltiples navegadores:

- Chromium (Chrome)
- Firefox
- WebKit (Safari)

Esto ayuda a garantizar que tu aplicación sea compatible en todos los entornos.

---

### 📊 Reportes

✔️ HTML Report: generado automáticamente en playwright-report/

✔️ Allure Report: compatible para reportes más detallados (requiere configuración adicional)

---

### 👨‍💻 Autor
Proyecto creado por John Muñoz como parte de su aprendizaje en automatización de pruebas con Playwright.
Puedes seguir el avance en redes usando #AprendiendoPlaywright.

✨ ¡Gracias por visitar este repositorio! Si te fue útil, considera darle ⭐️ en GitHub.

---