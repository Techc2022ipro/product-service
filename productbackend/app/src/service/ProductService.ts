import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import { ProductRepositories } from '../repositories/ProductRepository';
import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

export const ProductService: ProductServiceInterface = {
  async fetchProductsService() {
    const products = await ProductRepositories.fetch();
    return products;
  },

  async createProductsService(query, image) {
    if(image && process.env.AWS_BUCKET) {
      const fileStream = fs.createReadStream(image.path);
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Body: fileStream,
        Key: image.filename
      }
      const upload = await s3.upload(uploadParams).promise().catch(e => console.log(e));
      console.log(upload);
    }

    console.log(" down here");
    return await ProductRepositories.create(query);
  },
}
