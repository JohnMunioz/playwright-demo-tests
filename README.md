# 🎭 Proyecto de Pruebas Automatizadas con Playwright

Este repositorio contiene un conjunto de **pruebas automatizadas de extremo a extremo** (E2E) utilizando [Playwright](https://playwright.dev/) con **TypeScript**. El objetivo es aprender y demostrar cómo automatizar interacciones básicas con una página web.

---

## 🗂️ Estructura del Proyecto

playwright-first-project/ ├── tests/ # 📁 Carpeta principal donde se ubican los archivos de prueba │ └── example.spec.ts # 🧪 Clase con pruebas básicas (abrir página, validar título, hacer clic) ├── node_modules/ # 📦 Dependencias del proyecto (generado automáticamente) ├── playwright.config.ts # ⚙️ Configuración general de Playwright ├── package.json # 📜 Configuración del proyecto y scripts ├── package-lock.json # 📜 Archivo de bloqueo de versiones ├── .gitignore # 📄 Archivos/carpetas ignorados por Git ├── allure-results/ # 📁 Resultados para reportes con Allure ├── playwright-report/ # 📁 Reportes HTML generados por Playwright ├── test-results/ # 📁 Resultados crudos de las ejecuciones


---

## 📄 Descripción de la Clase de Pruebas

Archivo: `tests/example.spec.ts`

Contiene una suite con dos pruebas:

1. **Abrir la página de Playwright Java**  
   Verifica que la página carga correctamente y su título contiene "Playwright".

2. **Navegar al enlace Get Started**  
   Simula un clic en el enlace y valida que se muestre un encabezado con el texto "Installation".

---

## 🚀 ¿Cómo ejecutar las pruebas?

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta las pruebas:
```bash
npx playwright test
```
3. Abre el reporte HTML:
```bash
npx playwright show-report
```
---

🌐 Pruebas Multi-Navegador
Las pruebas se ejecutan por defecto en Chromium, Firefox y WebKit, lo que permite validar la compatibilidad en distintos navegadores.

📊 Reportes
HTML Report generado automáticamente en playwright-report/

Compatible con Allure para reportes más detallados (requiere configuración adicional)

🧪 Herramientas Utilizadas
Playwright

TypeScript

Node.js

Allure (opcional para reportes avanzados)

👨‍💻 Autor
John Muñoz

---