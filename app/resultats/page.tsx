export default function Home() {
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="bg-black bg-opacity-50 border-4 border-black border-opacity-20 p-12 rounded-lg shadow-lg shadow-black backdrop-blur-md">
        <h1 className="text-center text-3xl text-white font-bold mb-6 underline text-shadow-md">
          Classements
        </h1>
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="https://cuescore.com/hautsdefrance/rankings"
              className="text-white hover:text-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Classements individuels
            </a>
          </li>
          <li>
            <a
              href="https://cuescore.com/tournament/BLACKBALL-EQUIPE-DR1-2024%252F2025/46972318"
              className="text-white hover:text-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Classements Équipes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
