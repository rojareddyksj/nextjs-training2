import { NextResponse } from "next/server";

export async function GET() {
    const clothes = [
        {
            id: 1,
            title: "Men's Jacket",
            price: 89.99,
            image: "/images/jacket.png",
        },
        {
            id: 2,
            title: "Casual T-Shirt",
            price: 24.99,
            image: "/images/tshirt.png",
        },
        {
            id: 3,
            title: "Denim Jeans",
            price: 49.99,
            image: "/images/jeans.png",
        },
        {
            id: 4,
            title: "Women's Dress",
            price: 74.99,
            image: "/images/dress.png",
        },
    ];

    return NextResponse.json(clothes);
}
