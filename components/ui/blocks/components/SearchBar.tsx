import React from "react";


const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
    return (
        <div className="mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full bg-gray-900/10 border border-gray-700/10 dark:border-white/5 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                    className="absolute left-4 top-3.5 text-zinc-900 dark:text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </div>
    )
}


export default SearchBar
