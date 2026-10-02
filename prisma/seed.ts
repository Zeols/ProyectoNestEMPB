import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Cleaning existing data...');
    await prisma.user.deleteMany();
    console.log('Users deleted');
    await prisma.tenant.deleteMany();
    console.log('Tenants deleted');

    console.log('Creating tenants...');
    const tenant1 = await prisma.tenant.create({
        data: { name: 'Tech Solutions' },
    });
    const tenant2 = await prisma.tenant.create({
        data: { name: 'Marketing Pro' },
    });
    const tenant3 = await prisma.tenant.create({
        data: { name: 'Consulting Exp' },
    });

    console.log('Creating users...');
    const hashedPassword = await bcrypt.hash('123456', 10);

    await prisma.user.create({
        data: {
            email: 'admin@techsolutions.com',
            name: 'Admin Tech',
            password: hashedPassword,
            telephone: '8888-8888',
            role: 'ADMIN',
            tenantId: tenant1.id,
        },
    });

    await prisma.user.create({
        data: {
            email: 'user@marketingpro.com',
            name: 'User Marketing',
            password: hashedPassword,
            telephone: '7777-7777',
            role: 'USER',
            tenantId: tenant2.id,
        },
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });