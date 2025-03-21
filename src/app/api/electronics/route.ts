import { NextResponse } from "next/server";

export async function GET() {
    const electronics = [
        {
            id: 1,
            title: "Smartphone X",
            price: 699.99,
            image: "/images/mobile.png",
        },
        {
            id: 2,
            title: "Wireless Headphones",
            price: 199.99,
            image: "/images/headphones.png",
        },
        {
            id: 3,
            title: "Gaming Laptop",
            price: 1299.99,
            image: "/images/laptop.png",
        },
        {
            id: 4,
            title: "Smartwatch Pro",
            price: 249.99,
            image: "/images/smartwatch.png",
        },
    ];

    return NextResponse.json(electronics);
}
