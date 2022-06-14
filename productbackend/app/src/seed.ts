import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;
const names = ["tshirt", "pants", "hats", "bands", "shoes", "shocks"];
const brand = ["Nike", "H&M", "Zara", "Adidas", "Uniqlo","Louis Vuitton"];
const desc = ["is good", "what are thossseeeeee!!", "so bad that id puke", "wowwwww!"];
const seller = ["Harold Benz", "Bruce Banner", "Berdie Bruce", "Snoop Bull"];

const seed = {
    async seed() {
        const prod = await prisma.product.create({
            data: {
                name: names[Math.floor(Math.random() * names.length)],
                brand: brand[Math.floor(Math.random() * brand.length)],
                description: desc[Math.floor(Math.random() * desc.length)],
                seller: seller[Math.floor(Math.random()  * seller.length)],
            }
        })
        console.log(prod)
    }
}



for(let i = 0; i < 50; i++) {
    seed.seed();
}