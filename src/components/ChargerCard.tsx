import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Zap } from "lucide-react";

export function ChargerCard({ charger }) {
  return (
    <Card className="p-4 rounded-2xl relative shadow-lg">
      <img
        src={charger.image}
        alt={charger.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{charger.title}</h2>
      <div className="flex mb-2 text-blue-500">
        {Array.from({ length: charger.rating }).map((_, i) => (
          <Zap key={i} className="w-5 h-5 text-blue-400 rotate-12" />
        ))}
      </div>
      <a
        href={charger.maps_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 items-center flex gap-1 font-semibold mb-2 hover:underline"
      >
        {charger.location} <ExternalLink className="w-4 h-4" />
      </a>
      <CardContent className="text-sm p-1 text-justify text-muted-foreground">
        {charger.description}
      </CardContent>
    </Card>
  );
}
