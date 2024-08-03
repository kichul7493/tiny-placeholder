# @tiny-placeholder/core

## Table of Contents

- [Project Overview](#project-overview)
- [Installation / Usage](#installation--usage)
- [License](#license)

## Project Overview

This is a tiny library for use when you need simple placeholder images.

### Features

Both components offer the following features:

- Set desired width and height.
- Choose desired shape (rectangle, triangle, circle).
- Set desired background color.
- Insert text in the center of the image with desired color and size.

## Installation / Usage

npm:

```bash
$ npm install @tiny-placeholder/core
```

yarn:

```bash
$ yarn add @tiny-placeholder/core
```

pnpm:

```bash
$ pnpm add @tiny-placeholder/core
```

You can install @tiny-placeholder/core in your project using a package manager.

Example code:

```ts
const options = createPlaceholderOptions({
  width: 200,
  height: 200,
  backgroundColor: '#cccccc',
  textColor: '#333333',
  text: 'Placeholder',
  fontSize: 20,
  fontFamily: 'Arial, sans-serif',
  borderWidth: 0,
  borderColor: '#000000',
  borderStyle: 'solid',
  borderRadius: 0,
  shape: 'rectangle',
})

const placeholder = new PlaceholderImageGenerator(options)

const imageSrc = placeholder.getDataURL()

const imgElement = document.createElement('img')

img.src = imageSrc
```

### 1. createPlaceholderOptions

Use the `createPlaceholderOptions` function to generate `options` with type support.

### 2. PlaceholderImageGenerator

This class generates images based on provided options. The getDataURL method can return the image data. This can be used in various ways where image data is needed, such as displaying the generated image using an img tag or downloading the image using an a tag.

### [example code](https://github.com/kichul7493/tiny-placeholder/tree/main/examples/vanilla)

## License

This project is licensed under the terms of the MIT license.
