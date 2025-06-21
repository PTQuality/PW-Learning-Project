
# 🧪 Automation Testing with Playwright + JavaScript

This repository is created for learning purposes to explore and practice **end-to-end (E2E) automated testing** using the **Playwright** framework and **JavaScript**.  
It serves as a personal collection of exercises, notes, and examples during my automation journey.

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Goals and Objectives](#goals-and-objectives)
- [Technologies and Tools](#technologies-and-tools)
- [How to Get Started](#how-to-get-started)
- [Project Structure](#project-structure)
- [Test Example](#test-example)
- [Future Plans](#future-plans)
- [Final Notes](#final-notes)

---

## 🎯 About the Project

This project aims to build practical knowledge in writing automated tests for web applications using **Playwright** — a modern, powerful, multi-browser automation library developed by Microsoft.

---

## 🎯 Goals and Objectives

The main goals of this project are:

- Learn the basics and advanced features of Playwright
- Write clean, maintainable, and readable test code
- Practice testing various types of web applications
- Apply best practices in test automation

---

## ⚙️ Technologies and Tools

- **JavaScript (Node.js)** – programming language and runtime environment
- **Playwright** – end-to-end testing framework
- **Visual Studio Code** – code editor
- **Git / GitHub** – version control and collaboration platform

---

## 🚀 How to Get Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/playwright-js-learning.git
   ```

2. Navigate into the directory:
   ```bash
   cd playwright-js-learning
   ```

3. Install dependencies:
   ```bash
   npm init playwright@latest
   ```
   Or, if you already have a `package.json`:
   ```bash
   npm install
   ```

4. Run tests:
   ```bash
   npx playwright test
   ```

---

## 🗂️ Project Structure

```
├── tests/
│   └── example.spec.js        # Sample test file
├── package.json
├── playwright.config.js       # Playwright configuration
└── README.md
```

---

## 🧪 Test Example

```javascript
// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('should open the main page and check title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  await expect(title).toBe('Example Domain');
});
```

---

## 🔮 Future Plans

- Add tests for forms, login, and authentication
- Implement Page Object Model design pattern
- Run tests on multiple browsers and mobile viewports
- Generate test reports and integrate with CI (e.g., GitHub Actions)

---

## ✅ Final Notes

This repo will be updated continuously as I progress in learning automation testing.  
All feedback, suggestions, or improvements are welcome!
```

---