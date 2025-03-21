import { Suspense } from "react";
import ElectronicsList from "@/app/electronics/ElectronicsList";

export default function ElectronicsPage() {
    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Electronics</h1>

            {/* Suspense allows streaming */}
            <Suspense fallback={<p className="text-center text-gray-500">Loading electronics...</p>}>
                <ElectronicsList />
            </Suspense>
        </main>
    );
}
