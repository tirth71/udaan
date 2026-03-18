import dehydratedproductsImg from "@/assets/products/de.webp";
import fruitsvegetablesImg from "@/assets/products/fruitsvegetables.jpg";
import spicesImg from "@/assets/products/spices.jpg";
import grainsImg from "@/assets/products/grains.jpg";
// Product-specific images
import imgAgrSorghum from "@/assets/products/grains/Sorghum.jpg";
import imgAgrMillet from "@/assets/products/grains/Millet.jpg";
import imgAgrQuinoa from "@/assets/products/grains/Quinoa.jpg";
import imgAgrBasmatirice from "@/assets/products/grains/Basmatirice.jpg";
import imgAgrCorn from "@/assets/products/grains/Corn.jpg";
import imgAgrKidneyBeans from "@/assets/products/grains/KidneyBeans.jpg";
import imgAgrChanaDal from "@/assets/products/grains/ChanaDal.webp";
import imgAgrMasoorDal from "@/assets/products/grains/MasoorDal.jpg";
  




import imgonionpowder from "@/assets/products/dehydrated/Onion Powder (White, Pink & Red).jpg";
import  imgminced from "@/assets/products/dehydrated/Onion Minced (White, Pink & Red).webp";
import imgchopped from "@/assets/products/dehydrated/Onion Chopped (White, Pink & Red).webp";
import imgflakes from "@/assets/products/dehydrated/Onion Flakes (White, Pink & Red).webp";
import imggranules from "@/assets/products/dehydrated/Onion Granules (White, Pink & Red).webp";
import imgpowder from "@/assets/products/dehydrated/Garlic Powder.webp";
import imggarlic from "@/assets/products/dehydrated/Garlic Flakes.webp";







  

import kesar from "@/assets/products/fruits/mango.jpg";
import parwar from "@/assets/products/fruits/desi PARWAR.webp";
import sapotachiku from "@/assets/products/fruits/SAPOTA CHIKU.jpg";
import carrot from "@/assets/products/fruits/CARROT.jpg";
import haldi from "@/assets/products/fruits/ORGANIC YELLOW HALDI.webp";
import onions from "@/assets/products/fruits/Onions.jpeg";
import tuver from "@/assets/products/fruits/TUVER DANA.jpg";
import guava from "@/assets/products/fruits/BIG GUAVA.webp";
import cocunut from "@/assets/products/fruits/COCONUT.webp";



import redchili from "@/assets/products/spices/red-chilli-whol.jpg";
import turmeric from "@/assets/products/spices/Turmeric Fingers.webp";
import nutmeg from "@/assets/products/spices/Nutmeg Whole.webp";
import cinnamon from "@/assets/products/spices/Cinnamon & Cassia.jpg";
import cloves from "@/assets/products/spices/Cloves.jpeg";
import dryginger from "@/assets/products/spices/ry Ginge.jpg";
import blackpepper from "@/assets/products/spices/Black Pepper.jpeg";
import anise from "@/assets/products/spices/Star Anise.jpeg";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  serviceSlug: string; // matches services.ts slug
  slug: string; // product slug
  name: string;
  image: string; // path to image (can reuse category image)
  description: string;
  specs: ProductSpec[];
};

// const categoryImageMap: Record<string, string> = {
//   "grains": agricultureImg,
//   "dehydrated-products": machineryImg,
//   "fruits-vegetables": chemicalsImg,
//   "spices": textilesImg,
// };


const categoryImageMap: Record<string, string> = {
  "grains": grainsImg,
  "dehydrated-products": dehydratedproductsImg,
  "fruits-vegetables": fruitsvegetablesImg,
  "spices": spicesImg,
};  

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const productImageMap: Record<string, string> = {
  "grains/sorghum": imgAgrSorghum,
  "grains/millet": imgAgrMillet,
  "grains/quinoa": imgAgrQuinoa,
  "grains/basmati-rice": imgAgrBasmatirice,
  "grains/corn": imgAgrCorn,
 "grains/kidney-beans": imgAgrKidneyBeans, 
  "grains/chana-dal": imgAgrChanaDal,      
  "grains/masoor-dal": imgAgrMasoorDal, 
 
  "dehydrated-products/onion-powder-white-pink-red": imgonionpowder,
  "dehydrated-products/onion-minced-white-pink-red": imgminced,
  "dehydrated-products/onion-chopped-white-pink-red": imgchopped,
  "dehydrated-products/onion-flakes-white-pink-red": imgflakes,
  "dehydrated-products/onion-granules-white-pink-red": imggranules,
  "dehydrated-products/garlic-powder": imgpowder,
  "dehydrated-products/garlic-flakes": imggarlic,
  
  "fruits-vegetables/kesar-mango": kesar,
  "fruits-vegetables/desi-parwar": parwar,
 "fruits-vegetables/sapota-chiku": sapotachiku, 
  "fruits-vegetables/carrot": carrot,
  "fruits-vegetables/organic-yellow-haldi": haldi,
  "fruits-vegetables/onions": onions,
  "fruits-vegetables/tuver-dana": tuver,
  "fruits-vegetables/big-guava": guava,
  "fruits-vegetables/coconut": cocunut,   

   "spices/red-chilli-whole": redchili,
  "spices/turmeric-fingers": turmeric,
  "spices/nutmeg-whole": nutmeg,
  "spices/cinnamon-cassia": cinnamon,
  "spices/cloves": cloves,
  "spices/dry-ginger": dryginger,
 "spices/black-pepper": blackpepper,  
  "spices/star-anise": anise,




};

const makeDetail = (serviceSlug: string, name: string, overrides?: Partial<ProductDetail>): ProductDetail => ({
  serviceSlug,
  slug: toSlug(name),
  name,
  image: categoryImageMap[serviceSlug],
  description: `High-quality ${name} from our ${serviceSlug.replace(/-/g, " ")}. Export-ready, quality-checked, and compliant with international standards.`,
  specs: [
    { label: "Packaging", value: "Custom, export-grade" },
    { label: "MOQ", value: "Flexible (bulk orders welcomed)" },
    { label: "Origin", value: "India" },
    { label: "Grade", value: "Premium" },
  ],
  ...overrides,
});

const productNames: Record<string, string[]> = {
  "grains": [
    "Sorghum",
    "Millet",
    "Quinoa",
    "Basmati Rice",
    "Corn",
    "Kidney Beans",
    "Chana Dal",
    "Masoor Dal",
  ],
  "dehydrated-products": [
    "Onion Powder (White, Pink & Red)",
    "Onion Minced (White, Pink & Red)",
    "Onion Chopped (White, Pink & Red)",
    "Onion Flakes (White, Pink & Red)",
    "Onion Granules (White, Pink & Red)",
    "Garlic Powder",
    "Garlic Flakes",
  ],
  "fruits-vegetables": [
   "KESAR MANGO",
      "DESI PARWAR",
      "SAPOTA CHIKU",
      "CARROT",
      "ORGANIC YELLOW HALDI",
      "Onions",
       "TUVER DANA",
      "BIG GUAVA",
      "COCONUT",
  ],
  "spices": [
   "Red Chilli Whole",
    "Turmeric Fingers",
    "Nutmeg Whole",
    "Cinnamon & Cassia",
    "Cloves",
    "Dry Ginger",
    "Black Pepper",
    "Star Anise",
  ],
};

export const products: ProductDetail[] = Object.entries(productNames).flatMap(([serviceSlug, names]) =>
  names.map((name) => {
    const key = `${serviceSlug}/${toSlug(name)}`;
    const image = productImageMap[key] || categoryImageMap[serviceSlug];
    return makeDetail(serviceSlug, name, { image });
  })
);

export const getProductDetail = (serviceSlug: string, productSlug: string) =>
  products.find((p) => p.serviceSlug === serviceSlug && p.slug === productSlug);

export const getProductImage = (serviceSlug: string, productSlug: string) =>
  getProductDetail(serviceSlug, productSlug)?.image || categoryImageMap[serviceSlug];
