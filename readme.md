# PS-CUSTOM-CSS 

A lightweight utility-first CSS engine inspired by Tailwind CSS — built with pure JavaScript.

Chai CSS lets you style your HTML using utility classes without writing traditional CSS.

---

##  Features

* ⚡ Utility-first approach
* 🧠 Zero configuration
* 📦 Lightweight and fast
* 🎯 Easy to use
* 🛠️ Built using JavaScript (runtime CSS engine)

---

##  Installation

```bash
npm install ps-custom-css
```

---

##  CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/ps-custom-css"></script>
```

---

##  Usage

Add this script in you index.html
<script src="node_modules/ps-custom-css/src/index.js"></script>

Now, Simply add utility classes to your HTML elements:

```html
<h1 class="Chai-text-red Chai-p-2">
  Hello World 🚀
</h1>

<div class="Chai-bg-blue Chai-text-white Chai-p-3">
  Styled Box
</div>
```

---

##  Available Utilities

### 📦 Padding

* `Chai-p-0`, `Chai-p-1`, `Chai-p-2`, `Chai-p-3`, `Chai-p-4`
* `Chai-pt-2`, `Chai-pr-2`, `Chai-pb-2`, `Chai-pl-2`

### 📦 Margin

* `Chai-m-0`, `Chai-m-1`, `Chai-m-2`, `Chai-m-3`, `Chai-m-4`
* `Chai-mt-2`, `Chai-mr-2`, `Chai-mb-2`, `Chai-ml-2`

### 🎨 Text Colors

* `Chai-text-red`, `Chai-text-blue`, `Chai-text-green`
* `Chai-text-white`, `Chai-text-black`, `Chai-text-gray`

### 🎨 Background Colors

* `Chai-bg-red`, `Chai-bg-blue`, `Chai-bg-green`
* `Chai-bg-black`, `Chai-bg-white`, `Chai-bg-gray`

### 🔤 Font

* Sizes: `Chai-text-sm`, `Chai-text-md`, `Chai-text-lg`, `Chai-text-xl`, `Chai-text-2xl`
* Weights: `Chai-font-light`, `Chai-font-normal`, `Chai-font-bold`

### 📏 Layout

* Width: `Chai-w-full`, `Chai-w-half`, `Chai-w-screen`
* Height: `Chai-h-full`, `Chai-h-screen`

### 📦 Display

* `Chai-block`, `Chai-inline`, `Chai-flex`, `Chai-grid`, `Chai-hidden`

### 🔄 Flexbox

* `Chai-flex-row`, `Chai-flex-col`
* `Chai-justify-center`, `Chai-justify-between`
* `Chai-items-center`

### 🧱 Border & Radius

* `Chai-border`, `Chai-border-2`, `Chai-border-red`
* `Chai-rounded`, `Chai-rounded-lg`, `Chai-rounded-full`

### 🌫️ Shadow

* `Chai-shadow`, `Chai-shadow-lg`

### 🎯 Position

* `Chai-relative`, `Chai-absolute`
* `Chai-top-0`, `Chai-left-0`, `Chai-right-0`, `Chai-bottom-0`

### 🎚️ Others

* Overflow: `Chai-overflow-hidden`, `Chai-overflow-scroll`
* Cursor: `Chai-cursor-pointer`
* Opacity: `Chai-opacity-50`, `Chai-opacity-100`

---

## ⚙️ How It Works

Chai CSS scans your HTML for utility classes and dynamically applies styles using JavaScript.

---

##  Limitations

* No pseudo-classes (like `:hover`) yet
* No responsive utilities yet
* Runtime-based (not build-time like Tailwind)

---

##  Inspiration

Inspired by utility-first frameworks like Tailwind CSS.

---

## 👨 Author

Priyanshu Sharma \\
Aspiring Software Developer 
