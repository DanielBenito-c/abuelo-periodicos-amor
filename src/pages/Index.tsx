
import { Card } from "@/components/ui/card";
import NewspaperLink from "@/components/NewspaperLink";
import Footer from "@/components/Footer";

const Index = () => {
  const newspapers = [
    {
      name: "AS",
      url: "https://as.com",
      logo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png"
    },
    {
      name: "MARCA",
      url: "https://www.marca.com",
      logo: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/05/15517895689123.jpg"
    },
    {
      name: "LA RAZÓN",
      url: "https://www.larazon.es",
      logo: "https://img2.rtve.es/i/?w=1600&i=1446118283651.jpg"
    },
    {
      name: "EL MUNDO",
      url: "https://www.elmundo.es",
      logo: "https://e00-elmundo.uecdn.es/assets/desktop/master/img/logos/elmundo.png"
    },
    {
      name: "ABC",
      url: "https://www.abc.es",
      logo: "https://static3.abc.es/media/play/2020/05/28/abc-U50205519884EVE--620x349@abc.jpg"
    },
    {
      name: "EL PAÍS",
      url: "https://elpais.com",
      logo: "https://static.elpais.com/dist/resources/images/especiales/40aniversario/el-pais-40-logo.png"
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
