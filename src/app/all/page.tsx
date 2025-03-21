import ElectronicsList from "@/app/electronics/ElectronicsList";
import Clothes from "@/app/clothes/page";


export default function HomePage() {
    return (
        <main className="max-w-6xl mx-auto p-6 space-y-10">
            <h1 className="text-4xl font-bold text-center mb-6">Product Showcase</h1>

            {/* Server Component */}
            <section>
                <h2 className="text-3xl font-bold mb-4"></h2>
                <ElectronicsList />
            </section>

            {/* Client Component */}
            <section>
                <h2 className="text-3xl font-bold mb-4"></h2>
                <Clothes />
            </section>
        </main>
    );
}
