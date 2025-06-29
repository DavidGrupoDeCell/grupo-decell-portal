// Arquivo: apps/web/app/page.tsx

import { ServiceCard } from "@repo/ui/ServiceCard"; // Importamos nosso componente de cartão

export default function Page() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nossas Soluções - Grupo DéCell
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Assistência Técnica"
          description="Reparos rápidos e confiáveis para celulares e computadores."
        />
        <ServiceCard
          title="Confeitaria por Amor"
          description="Bolos, doces e sobremesas feitos com os melhores ingredientes e muito carinho."
        />
        <ServiceCard
          title="Gráfica Rápida"
          description="Impressões, cartões de visita e materiais gráficos com agilidade e qualidade."
        />
        <ServiceCard
          title="Marketing Digital"
          description="Impulsione sua marca com nossas estratégias de marketing e gestão de redes sociais."
        />
        <ServiceCard
          title="Serralheria"
          description="Soluções em metal personalizadas, desde portões a estruturas complexas."
        />
        <ServiceCard
          title="Serviços de Entrega"
          description="Coleta e entrega de documentos e pequenas encomendas com rapidez e segurança."
        />
      </div>
    </main>
  );
}