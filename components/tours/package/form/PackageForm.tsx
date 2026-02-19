import Image from "next/image";

interface PackageType {
  id: number;
  title: string;
  description: string;
  duration: string[];
  inclusions: string;
  exclusions: string;
  sites: [string, string][];
  thumbnail: string;
  is_popular: boolean;
}

export default function PackageForm({
  handlePackageForm,
  packageData,
}: {
  handlePackageForm: () => void;
  packageData: PackageType | null;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative h-[240px] sm:h-[300px] flex-shrink-0 flex items-center justify-center bg-[url('assets/images/form-hero.png')] bg-center bg-cover text-white">
        <button
          type="button"
          onClick={handlePackageForm}
          className="absolute top-4 right-4 text-white text-2xl hover:text-orange-500 z-20"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-50">
            {packageData ? packageData.title : "Let's go Exploring"}
          </h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="px-8 py-6 flex flex-col min-h-full">
          {packageData && (
            <div className="mb-6 text-lg text-gray-800 drop-shadow-sm space-y-6">
              <div>
                <span className="font-bold block mb-4 text-gray-900">
                  Sites to visit:
                </span>
                <div className="flex flex-wrap gap-4 justify-center">
                  {packageData.sites.map(([site, imageUrl], index) => (
                    <div
                      key={site || index}
                      className="flex flex-col items-center gap-5"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 ring-2 ring-gray-200">
                        <Image
                          src={imageUrl || packageData.thumbnail}
                          width={192}
                          height={192}
                          quality={95}
                          alt={site}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-700 text-center max-w-20 truncate">
                        {site}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-bold">Inclusions:</span> <br />{" "}
                  {packageData.inclusions}
                </p>
                <p>
                  <span className="font-bold">Exclusions:</span> <br />{" "}
                  {packageData.exclusions}
                </p>

                {packageData.duration &&
                  Array.isArray(packageData.duration) && (
                    <div className="space-y-2 pt-4">
                      {packageData.duration.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          )}

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-black py-3 text-white inline-block text-center font-medium no-underline hover:bg-gray-800 hover:scale-105 transition"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}
