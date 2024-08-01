# tiny-placeholder

## Table of Contents

- [Project Overview](#project-overview)
- [Installation / Usage](#installation--usage)
- [License](#license)

## Project Overview

This is a tiny library for use when you need simple placeholder images.  
It is available for use in React projects.

The library provides two components:

- `PlaceholderImage` component for displaying placeholder images
- `PlaceholderImageDownloader` component for downloading placeholder images

### Features

Both components offer the following features:

- Set desired width and height.
- Choose desired shape (rectangle, triangle, circle).
- Set desired background color.
- Insert text in the center of the image with desired color and size.

## Installation / Usage

npm:

```bash
$ npm install tiny-placeholder
```

yarn:

```bash
$ yarn add tiny-placeholder
```

pnpm:

```bash
$ pnpm add tiny-placeholder
```

You can install tiny-placeholder in your project using a package manager.

Example code:

```tsx
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

<PlaceholderImage
  options={options}
  alt="This is a placeholder image."
/>

<PlaceholderImageDownloader
  options={options}
  component={<Button/>}
/>

const Button = () => {
  return <button>Download</button>
}
```

### 1. createPlaceholderOptions

Use the `createPlaceholderOptions` function to generate `options` with type support.

### 2. PlaceholderImage

The `PlaceholderImage` component provides an image tag with the configured `options` props.

### 3. PlaceholderImageDownloader

The `PlaceholderImageDownloader` component provides an anchor (`a`) tag to download the generated image using the configured `options` props. You can define the download button's appearance using the `component` prop.

## License

This project is licensed under the terms of the MIT license.
