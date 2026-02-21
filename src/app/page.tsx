import VitaminDCalculator from '@/components/VitaminDCalculator';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-5xl font-bold tracking-tight mb-3 text-center">Get your D</h1>
      <p className="text-lg opacity-60 max-w-sm mb-10 text-center">
        Calculate your 30-day Vitamin D loading dose based on your weight and current 25(OH)D level.
      </p>
      <VitaminDCalculator />
    </main>
  );
}
