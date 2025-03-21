import Image from "next/image";

// Simulate delay for streaming effect
async function getElectronics() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
    const res = await fetch("http://localhost:3000/api/electronics");
    return res.json();
}

export default async function ElectronicsList() {
    const products = await getElectronics();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
                <div
                    key={product.id}
                    className="border-2 border-blue-600 rounded-xl shadow-lg bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                    {/* Image Section */}
                    <div className="w-full aspect-[4/3]  flex items-center justify-center">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={200}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-gray-800 truncate">
                            {product.title}
                        </h2>
                        <p className="text-gray-600 text-sm line-clamp-2">
                            {product.description}
                        </p>
                        <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
