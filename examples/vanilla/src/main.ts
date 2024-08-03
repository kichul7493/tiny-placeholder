import {
  createPlaceholderOptions,
  PlaceholderImageGenerator,
  PlaceholderOptions,
} from "@tiny-placeholder/core";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>tiny-placeholder vanilla example</h1>
    <div class="card">
      
    </div>
    
  </div>
`;

const generateImg = (options: PlaceholderOptions) => {
  const placeholder = new PlaceholderImageGenerator(options);

  const img = document.createElement("img");

  img.src = placeholder.getDataURL();

  return img;
};

const generateDownloader = (options: PlaceholderOptions) => {
  const placeholder = new PlaceholderImageGenerator(options);

  const link = document.createElement("a");

  link.href = placeholder.getDataURL();

  link.download = "placeholder.png";

  link.innerText = "Download";

  return link;
};

const options = createPlaceholderOptions({
  backgroundColor: "white",
  textColor: "black",
});

const img = generateImg(options);
const link = generateDownloader(options);

document.querySelector<HTMLDivElement>(".card")!.appendChild(img);

document.querySelector<HTMLDivElement>(".card")!.appendChild(link);
