"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Clothes() {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        async function fetchClothes() {
            const res = await fetch("/api/clothes");
            const data = await res.json();
            setClothes(data);
        }
        fetchClothes();
    }, []);

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center ">Clothes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {clothes.map((item: any) => (
                    <div
                        key={item.id}
                        className="border-2 border-blue-600 rounded-xl shadow-lg bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Image Section */}
                        <div className="w-full aspect-[4/3] items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={200}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-800 truncate">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                {item.description}
                            </p>
                            <p className="text-blue-600 font-semibold text-lg">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
