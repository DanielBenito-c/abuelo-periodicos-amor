
import { Card } from "@/components/ui/card";

interface NewspaperLinkProps {
  name: string;
  url: string;
  logo: string;
}

const NewspaperLink = ({ name, url, logo }: NewspaperLinkProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-4 h-full"
      >
        <div className="flex flex-col items-center h-full">
          <div className="w-full h-32 flex items-center justify-center mb-4 bg-gray-100 rounded-md overflow-hidden">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="max-h-24 max-w-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/200x100/e2e8f0/64748b?text=' + name;
              }}
            />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800">
            {name}
          </h2>
        </div>
      </a>
    </Card>
  );
};

export default NewspaperLink;
