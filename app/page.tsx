import { Card, Footer, Header } from "./components";

const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: "214000000",
  },
  {
    id: 2,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "125800000",
  },
  {
    id: 3,
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "38250000",
  },
  {
    id: 4,
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83240000",
  },
  {
    id: 5,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "26100000",
  },
  {
    id: 6,
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: "1407000000",
  },
  {
    id: 7,
    country: "Nigeria",
    capital: "Abuja",
    region: "Africa",
    population: "223800000",
  },
  {
    id: 8,
    country: "Italy",
    capital: "Rome",
    region: "Europe",
    population: "59260000",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map(({id, country, capital, region, population}) => (
        <Card 
        key ={id}
          country={country}
          capital={capital} 
          region={region} 
          population={population}
        />
        ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
