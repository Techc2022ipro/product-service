
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const defaultTags = ['winter','summer','autumn','spring','geeky','nerdy', 'cool', 'modern', 'minimalist'];


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