
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { toast } from "sonner";

const GiftCardSection = () => {
  const handleBuyGiftCard = () => {
    toast.success("¡Tarjeta de regalo añadida al carrito!", {
      description: "Personaliza tu mensaje durante el proceso de compra.",
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-neuro-deepblue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-neuro-deepblue/80 to-neuro-teal/80 p-8 rounded-lg shadow-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Tarjetas de Regalo</h2>
              <p className="mb-6">
                Regala el poder de la transformación personal a tus seres queridos.
                Las tarjetas de regalo de NeuroVerse son perfectas para cualquier ocasión.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Gift className="text-neuro-gold" />
                  <span>Válidas para cualquier producto o servicio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="text-neuro-gold" />
                  <span>Personaliza tu mensaje</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="text-neuro-gold" />
                  <span>Disponibles desde €25 hasta €200</span>
                </div>
              </div>
              <Button onClick={handleBuyGiftCard} className="bg-neuro-gold hover:bg-neuro-gold/80 text-neuro-deepblue">
                Comprar Tarjeta de Regalo
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-40 bg-gradient-to-r from-neuro-amber to-neuro-gold rounded-xl shadow-lg p-4 rotate-3 transform transition-transform hover:rotate-0 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-neuro-deepblue text-lg">NeuroVerse</span>
                    <Gift className="text-neuro-deepblue" />
                  </div>
                  <div className="text-center text-neuro-deepblue">
                    <div className="text-2xl font-bold">TARJETA REGALO</div>
                    <div className="text-xl">€50</div>
                  </div>
                  <div className="text-xs text-neuro-deepblue/80 text-right">
                    *Válida para todos los productos y servicios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
