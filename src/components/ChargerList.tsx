import { chargers } from "@/data/featuredChargers";
import { ChargerCard } from "./ChargerCard";

export function ChargersList() {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-4 lg:px-16 py-12">
      {chargers.map((charger, i) => (
        <ChargerCard key={i} charger={charger} />
      ))}
    </section>
  );
}
