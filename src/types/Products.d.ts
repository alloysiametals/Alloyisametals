declare module "*.json" {
  import { Product } from "./product";
  const value: Record<string, Product[]>;
  export default value;
}
