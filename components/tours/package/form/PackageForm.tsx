interface PackageType {
    id: number;
    title: string;
    description: string;
    duration: string[];
    inclusions: string;
    exclusions: string;
    sites: string;
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
            {/* Header */}
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

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto bg-white">
                <div className="px-8 py-6 flex flex-col min-h-full">
                    {packageData && (
                        <div className="mb-6 text-lg text-gray-800 drop-shadow-sm space-y-2">
                            <p>Sites: {packageData.sites}</p>
                            <p>
                                Inclusions: <br /> {packageData.inclusions}
                            </p>
                            <p>Exclusions: {packageData.exclusions}</p>

                            {packageData.duration && Array.isArray(packageData.duration) && (
                                <div className="space-y-2">
                                    <p className="font-medium text-gray-800">Select duration</p>
                                    <div className="flex flex-col gap-2">
                                        {packageData.duration.map((option) => (
                                            <label key={option} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="duration"
                                                    value={option}
                                                    required
                                                    className="accent-black"
                                                />
                                                <span className="text-gray-700">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Form fields */}
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            required
                            placeholder="Full name"
                            className="col-span-1 sm:col-span-2 w-full border px-3 py-2 text-gray-800"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="w-full border px-3 py-2 text-gray-800"
                        />
                        <input
                            type="tel"
                            required
                            placeholder="Contact number"
                            className="w-full border px-3 py-2 text-gray-800"
                        />
                    </form>

                    <form className="space-y-4 mt-auto">
                        <textarea
                            placeholder="Additional notes"
                            className="w-full h-40 border px-3 py-2 text-gray-800 resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-black py-3 text-white"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
