interface PackageType {
    id: number;
    title: string;
    description: string;
    duration: string;
    inclusions: string;
    exclusions: string;
    sites: string;
    thumbnail: string;
    is_popular: boolean;
}

export default function PackageForm({handlePackageForm, packageData,}: {handlePackageForm: () => void;packageData: PackageType | null;}) {
    return (
        <div className="h-full flex flex-col px-8 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    {packageData ? packageData.title : "Login required"}
                </h2>
                <button
                    type="button"
                    onClick={handlePackageForm}
                    className="text-gray-400 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Package Info */}
            {packageData && (
                <div className="mb-6 text-sm text-gray-700 space-y-2">
                    <p>Duration: {packageData.duration}</p>
                    <p>Description:{packageData.description}</p>
                    <p>Sites: {packageData.sites}</p>
                    <p>Inclusions:{packageData.inclusions}</p>
                    <p>Exclusions:{packageData.exclusions}</p>
                </div>
            )}

            {/* Login / Booking Form */}
            <div className="flex-1 overflow-y-auto">
                <form className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full rounded-lg border px-3 py-2"
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
    );
}
