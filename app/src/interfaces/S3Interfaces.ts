import {Image} from "@/entities/product";

export type S3ServiceInterface = {
  uploadImageService(image: Image): Promise<string>
}
