
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const defaultTags = ['Winter','Summer','Autumn','Spring','Geeky','Nerdy', 'Cool', 'Modern', 'Minimalist'];


defaultTags.forEach(async element => {
    console.log(`Making database entry for ${element}`);
    try {
        const tags = await prisma.tags.create({
            data: {
                tag: element
            }
        });
        console.log(tags);
    } catch (error) {
        console.log(error);
    }
});