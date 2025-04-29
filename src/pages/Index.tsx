
import { Card } from "@/components/ui/card";
import NewspaperLink from "@/components/NewspaperLink";
import Footer from "@/components/Footer";

const Index = () => {
  const newspapers = [
    {
      name: "AS",
      url: "https://as.com",
      logo: "/lovable-uploads/99c8b8c5-f0b1-4c5c-9f99-3e6eac0ac282.png"
    },
    {
      name: "MARCA",
      url: "https://www.marca.com",
      logo: "/lovable-uploads/f99e238a-889e-4241-8bf3-945ae4cec5be.png"
    },
    {
      name: "LA RAZÓN",
      url: "https://www.larazon.es",
      logo: "/lovable-uploads/0b7f89b1-986e-4fc2-97cd-1ab62543d8a7.png"
    },
    {
      name: "EL MUNDO",
      url: "https://www.elmundo.es",
      logo: "/lovable-uploads/24eccd51-cfce-4204-85e8-f00bbff2b25f.png"
    },
    {
      name: "ABC",
      url: "https://www.abc.es",
      logo: "/lovable-uploads/b45042b9-91d5-4733-9937-f7eae51b5e1c.png"
    },
    {
      name: "EL PAÍS",
      url: "https://elpais.com",
      logo: "/lovable-uploads/647cd851-4cbb-40cd-ab15-61d343415860.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="bg-white shadow-md p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 border-b pb-4">
            Periódicos
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newspapers.map((newspaper) => (
              <NewspaperLink 
                key={newspaper.name} 
                name={newspaper.name} 
                url={newspaper.url} 
                logo={newspaper.logo}
              />
            ))}
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
