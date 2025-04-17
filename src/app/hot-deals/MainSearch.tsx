"use client";
import React, { useState, useRef, useEffect, JSX } from "react";
import { ChevronDown, House } from "lucide-react";

type SearchOption = {
  id: string;
  label: string;
  selected: boolean;
};

type PropertyType = {
  id: string;
  name: string;
  icon: JSX.Element;
  active: boolean;
};

const RealEstateSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showPropertyCategoryDropdown, setShowPropertyCategoryDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SearchOption[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("Budget");
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState("Property Type");
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchOptions: SearchOption[] = [
    { id: "prestige-kingfisher", label: "Prestige Kingfisher Towers", selected: false },
    { id: "sobha-dream", label: "Sobha Dream Acres", selected: false },
    { id: "godrej-park", label: "Godrej Park Retreat", selected: false },
    { id: "brigade-palm", label: "Brigade Palm Springs", selected: false },
    { id: "purva-park", label: "Purva Park Hill", selected: false },
  ];

  const initialPropertyTypes: PropertyType[] = [
    { id: "buy", name: "Buy Properties", icon: <House />, active: true },
    { id: "rent", name: "Rent Properties", icon: <House />, active: false },
    { id: "new", name: "New Projects", icon: <House />, active: false },
    { id: "pg", name: "PG / Hostels", icon: <House />, active: false },
    { id: "land", name: "Plot & Land", icon: <House />, active: false },
    { id: "commercial", name: "Commercial", icon: <House />, active: false },
    { id: "agents", name: "Find Agents", icon: <House />, active: false },
  ];

  useEffect(() => {
    setPropertyTypes(initialPropertyTypes);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowBudgetDropdown(false);
        setShowPropertyCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };

  const toggleOption = (id: string) => {
    const updatedOptions = searchOptions.map((option) => (option.id === id ? { ...option, selected: !option.selected } : option));
    const selected = updatedOptions.filter((opt) => opt.selected);
    setSelectedOptions(selected);
  };

  const removeSelectedOption = (id: string) => {
    const updatedOptions = searchOptions.map((option) => (option.id === id ? { ...option, selected: false } : option));
    setSelectedOptions(updatedOptions.filter((opt) => opt.selected));
  };

  const selectPropertyType = (id: string) => {
    setPropertyTypes(propertyTypes.map((type) => ({ ...type, active: type.id === id })));
  };

  const filteredOptions = searchOptions.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="mx-auto px-4 py-8 sm:py-12">
      <div className="bg-[#ffffff3a] rounded-lg p-4 sm:p-6 shadow-lg mt-12">
        {/* Tabs Row */}
        <div className="flex overflow-x-auto py-2 mb-5 scrollbar-hide bg-white rounded-lg md:mx-20 justify-center -mt-12">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => selectPropertyType(type.id)}
              className={`flex flex-col items-center px-3 sm:px-4 py-2 rounded-lg mx-1 min-w-max text-xs sm:text-sm ${
                type.active ? " text-red-700  border border-b-red-700" : "text-gray-800 hover:bg-red-700"
              }`}
            >
              <div className="text-xl mb-1">{type.icon}</div>
              <span className="font-medium text-center">{type.name}</span>
            </button>
          ))}
        </div>

        <div className="relative z-10" ref={dropdownRef}>
          <div className="flex flex-col sm:flex-row sm:items-center bg-white rounded-lg">
            <div className="w-full p-4 ">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedOptions.map((option) => (
                  <div key={option.id} className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {option.label}
                    <button onClick={() => removeSelectedOption(option.id)} className="ml-2 text-purple-600 hover:text-purple-900">
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by Project, Locality or Builder"
                className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                onClick={() => setShowDropdown(true)}
              />
            </div>

            {/* Controls: Dropdowns & Search Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 px-4 pb-4 sm:pb-0">
              {/* Property Type Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => {
                    setShowPropertyCategoryDropdown(!showPropertyCategoryDropdown);
                    setShowBudgetDropdown(false);
                  }}
                  className="flex items-center whitespace-nowrap justify-between w-full sm:w-auto text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-300"
                >
                  {selectedCategoryLabel}
                  <ChevronDown className="ml-2" />
                </button>
                {showPropertyCategoryDropdown && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    {["Residential", "Commercial"].map((cat) => (
                      <label key={cat} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyCategory"
                          value={cat}
                          checked={selectedCategoryLabel === cat}
                          onChange={() => {
                            setSelectedCategoryLabel(cat);
                            setShowPropertyCategoryDropdown(false);
                          }}
                          className="mr-2"
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => {
                    setShowBudgetDropdown(!showBudgetDropdown);
                    setShowPropertyCategoryDropdown(false);
                  }}
                  className="flex items-center whitespace-nowrap justify-between w-full sm:w-auto text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-300"
                >
                  {selectedBudget}
                  <ChevronDown className="ml-2" />
                </button>
                {showBudgetDropdown && (
                  <div className="absolute right-0 mt-1 w-60 bg-white rounded-md shadow-lg py-1 z-50">
                    {["Under ₹50L", "₹50L - ₹75L", "₹75L - ₹1Cr", "₹1Cr - ₹1.5Cr", "Above ₹1.5Cr"].map((budget) => (
                      <button
                        key={budget}
                        onClick={() => {
                          setSelectedBudget(budget);
                          setShowBudgetDropdown(false);
                        }}
                        className="block whitespace-nowrap w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>

          {/* Search Suggestions Dropdown */}
          {showDropdown && (
            <div className="absolute z-40 mt-1 w-full bg-white shadow-lg rounded-b-lg max-h-96 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                <ul className="py-1">
                  {filteredOptions.map((option) => (
                    <li key={option.id}>
                      <button
                        onClick={() => toggleOption(option.id)}
                        className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-100 ${option.selected ? "bg-purple-50" : ""}`}
                      >
                        <span>{option.label}</span>
                        {option.selected && <FiCheck />}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FiX = ({ size = 16 }) => <span style={{ fontSize: size }}>❌</span>;
const FiCheck = ({ size = 16 }) => <span style={{ fontSize: size }}>✔️</span>;

export default RealEstateSearch;
