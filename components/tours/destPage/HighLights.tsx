type FBMetaData = {
    id: number,
    header: string,
    description: string,
    link: string,
    date: string,
    comment_no: number
}

type FBMetaDataProps = {
    metaData: FBMetaData[];
};

export default function Highlights({metaData}: FBMetaDataProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {metaData.map((data) => (
                <div key={data.id} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                        <a href="#">
                            <img className="w-full"
                                src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                alt="Sunset in the mountains" 
                            />
                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href={data.link}
                            className="font-medium text-lg text-gray-800 hover:text-orange-600 transition duration-500 ease-in-out inline-block mb-2">
                                {data.header}
                        </a>
                        <p className="text-gray-500 text-sm">
                            {data.description}
                        </p>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <span className="ml-1">{data.date}</span>
                        </span>
                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">{data.comment_no} Comments</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}