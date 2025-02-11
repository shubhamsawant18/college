import React, { useState } from 'react';
import "../assets/styles/Sidebar.css";
import { Search } from 'lucide-react';
const categories = [
    {
      id: "btech",
      title: "B.Tech",
      subcategories: [
        {
          name: "Top Cities & States",
          items: [
            "Top B.Tech Colleges in Mumbai",
            "Top B.Tech Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Streams",
          items: [
            "Computer Science",
            "Mechanical Engineering",
            "Electronics & Communication",
            "View More Streams",
          ],
        },
        {
          name: "College Predictor",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mba",
      title: "MBA",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top MBA Colleges in Mumbai",
            "Top MBA Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Streams",
          items: [
            "Finance",
            "Marketing",
            "Human Resources",
            "View More Streams",
          ],
        },
        {
          name: "College Predictor",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mtech",
      title: "M.Tech",
      subcategories: [
        {
          name: "Browse By Streams",
          items: [
            "Computer Science",
            "Mechanical Engineering",
            "Electronics & Communication",
            "View More Streams",
          ],
        },
        {
          name: "College Predictor",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mbbs",
      title: "MBBS",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top MBBS Colleges in Delhi",
            "Top MBBS Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Streams",
          items: [
            "General Medicine",
            "Pediatrics",
            "Surgery",
            "View More Streams",
          ],
        },
        {
          name: "College Predictor",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bcom",
      title: "B.Com",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Com Colleges in Delhi",
            "Top B.Com Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Streams",
          items: ["Accounting", "Finance", "Marketing", "View More Streams"],
        },
        {
          name: "College Predictor",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "ba",
      title: "BA",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top BA Colleges in Delhi",
            "Top BA Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By BA Streams",
          items: ["Art", "Science", "Commerce"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bba",
      title: "BBA",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top BBA Colleges in Delhi",
            "Top BBA Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By BBA Streams",
          items: ["Marketing", "Management", "HR"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bca",
      title: "BCA",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top BCA Colleges in Delhi",
            "Top BCA Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By BCA Streams",
          items: ["Software Engineering", "Networking", "Database Management"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "barch",
      title: "B.Arch",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Arch Colleges in Delhi",
            "Top B.Arch Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Arch Streams",
          items: ["Architecture", "Urban Planning"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bed",
      title: "B.Ed",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Ed Colleges in Delhi",
            "Top B.Ed Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Ed Streams",
          items: ["Primary Education", "Secondary Education"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bpharm",
      title: "B.Pharm",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Pharm Colleges in Mumbai",
            "Top B.Pharm Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Pharm Streams",
          items: ["Pharmaceutical Chemistry", "Pharmacology", "Pharmaceutics"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bscagriculture",
      title: "B.Sc (Agriculture)",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Sc (Agriculture) Colleges in Delhi",
            "Top B.Sc (Agriculture) Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Sc (Agriculture) Streams",
          items: ["Agronomy", "Horticulture", "Soil Science"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bams",
      title: "BAMS",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top BAMS Colleges in Delhi",
            "Top BAMS Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By BAMS Streams",
          items: ["Ayurveda", "Naturopathy"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "llb",
      title: "LLB",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top LLB Colleges in Delhi",
            "Top LLB Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By LLB Streams",
          items: ["Criminal Law", "Civil Law", "Corporate Law"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "llm",
      title: "LLM",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top LLM Colleges in Delhi",
            "Top LLM Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By LLM Streams",
          items: ["International Law", "Corporate Law", "Human Rights"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mpharm",
      title: "M.Pharm",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top M.Pharm Colleges in Delhi",
            "Top M.Pharm Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By M.Pharm Streams",
          items: ["Pharmaceutical Sciences", "Medicinal Chemistry"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "msc",
      title: "M.Sc",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top M.Sc Colleges in Delhi",
            "Top M.Sc Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By M.Sc Streams",
          items: ["Physics", "Chemistry", "Mathematics"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mca",
      title: "MCA",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top MCA Colleges in Delhi",
            "Top MCA Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By MCA Streams",
          items: ["Software Engineering", "Data Science"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },

    {
      id: "bachelorofphysiotherapy",
      title: "Bachelor of Physiotherapy",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Bachelor of Physiotherapy Colleges in Delhi",
            "Top Bachelor of Physiotherapy Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Bachelor of Physiotherapy Streams",
          items: [
            "Musculoskeletal Physiotherapy",
            "Neurological Physiotherapy",
            "Pediatric Physiotherapy",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bdes",
      title: "B.Des",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Des Colleges in Delhi",
            "Top B.Des Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Des Streams",
          items: ["Interior Design", "Fashion Design", "Graphic Design"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "mplanning",
      title: "M.Planning",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top M.Planning Colleges in Delhi",
            "Top M.Planning Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By M.Planning Streams",
          items: [
            "Urban Planning",
            "Transportation Planning",
            "Regional Planning",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "bplanning",
      title: "B.Planning",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top B.Planning Colleges in Chennai",
            "Top B.Planning Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By B.Planning Streams",
          items: [
            "Urban Design",
            "Land Use Planning",
            "Environmental Planning",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "agriculture",
      title: "Agriculture",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Agriculture Colleges in Delhi",
            "Top Agriculture Colleges in Hyderabad",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Agriculture Streams",
          items: ["Horticulture", "Agronomy", "Agricultural Economics"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "arts",
      title: "Arts",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Arts Colleges in Kolkata",
            "Top Arts Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Arts Streams",
          items: ["Fine Arts", "Performing Arts", "Visual Arts"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "commerce",
      title: "Commerce",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Commerce Colleges in Delhi",
            "Top Commerce Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Commerce Streams",
          items: ["B.Com", "BBA", "Accounting"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "computerapplications",
      title: "Computer Applications",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Computer Applications Colleges in Pune",
            "Top Computer Applications Colleges in Delhi",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Computer Applications Streams",
          items: [
            "Software Engineering",
            "Data Science",
            "Artificial Intelligence",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "design",
      title: "Design",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Design Colleges in Delhi",
            "Top Design Colleges in Bangalore",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Design Streams",
          items: ["Graphic Design", "Interior Design", "Product Design"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Engineering Colleges in Pune",
            "Top Engineering Colleges in Chennai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Engineering Streams",
          items: [
            "Mechanical Engineering",
            "Computer Science Engineering",
            "Electrical Engineering",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "law",
      title: "Law",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Law Colleges in Delhi",
            "Top Law Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Law Streams",
          items: ["Corporate Law", "Criminal Law", "Civil Law"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "management",
      title: "Management",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Management Colleges in Delhi",
            "Top Management Colleges in Mumbai",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Management Streams",
          items: ["MBA", "Business Administration", "Marketing Management"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "medical",
      title: "Medical",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Medical Colleges in Mumbai",
            "Top Medical Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Medical Streams",
          items: [
            "General Medicine",
            "Surgery",
            "Pediatrics",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "paramedical",
      title: "Paramedical",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Paramedical Colleges in Mumbai",
            "Top Paramedical Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Paramedical Streams",
          items: ["Radiology", "Physiotherapy", "Nursing", "View More Streams"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Pharmacy Colleges in Mumbai",
            "Top Pharmacy Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Pharmacy Streams",
          items: [
            "Pharmacology",
            "Pharmaceutical Chemistry",
            "Pharmacy Practice",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "science",
      title: "Science",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Science Colleges in Mumbai",
            "Top Science Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Science Streams",
          items: ["Physics", "Chemistry", "Biology", "View More Streams"],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Architecture Colleges in Mumbai",
            "Top Architecture Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Architecture Streams",
          items: [
            "Urban Planning",
            "Landscape Architecture",
            "Interior Design",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "aviation",
      title: "Aviation",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Aviation Colleges in Mumbai",
            "Top Aviation Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Aviation Streams",
          items: [
            "Pilot Training",
            "Aeronautical Engineering",
            "Aviation Management",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "dental",
      title: "Dental",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Dental Colleges in Mumbai",
            "Top Dental Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Dental Streams",
          items: [
            "Orthodontics",
            "Periodontics",
            "Prosthodontics",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "education",
      title: "Education",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Education Colleges in Mumbai",
            "Top Education Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Education Streams",
          items: [
            "Primary Education",
            "Secondary Education",
            "Special Education",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "hotelmanagement",
      title: "Hotel Management",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Hotel Management Colleges in Mumbai",
            "Top Hotel Management Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Hotel Management Streams",
          items: [
            "Hospitality Management",
            "Culinary Arts",
            "Hotel Administration",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "masscommunications",
      title: "Mass Communications",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Mass Communications Colleges in Mumbai",
            "Top Mass Communications Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Mass Communications Streams",
          items: [
            "Journalism",
            "Public Relations",
            "Advertising",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "veterinarysciences",
      title: "Veterinary Sciences",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Veterinary Sciences Colleges in Mumbai",
            "Top Veterinary Sciences Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Veterinary Sciences Streams",
          items: [
            "Animal Health",
            "Veterinary Surgery",
            "Veterinary Medicine",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
    {
      id: "animation",
      title: "Animation",
      subcategories: [
        {
          name: "Top Cities",
          items: [
            "Top Animation Colleges in Mumbai",
            "Top Animation Colleges in Pune",
            "View More Top Cities",
          ],
        },
        {
          name: "Browse By Animation Streams",
          items: [
            "3D Animation",
            "Visual Effects",
            "Game Design",
            "View More Streams",
          ],
        },
        {
          name: "College Predictions",
          items: ["See All", "View More Predictions"],
        },
      ],
    },
  ];

const Sidebar = ({ isOpen, setIsOpen }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [displayedItems, setDisplayedItems] = useState(null); // New state for displayed items
    const [search, setSearch] = useState("");

    const handleCategoryClick = (category) => {
        if (activeCategory === category) {
            setActiveCategory(null);
            setActiveSubcategory(null);
            setDisplayedItems(null); // Clear displayed items
        } else {
            setActiveCategory(category);
            setActiveSubcategory(null);
            setDisplayedItems(null); // Clear displayed items
        }
    };

    const handleSubcategoryClick = (category, subcategory) => {
        if (activeSubcategory === subcategory) {
            setActiveSubcategory(null);
            setDisplayedItems(null); // Clear displayed items
        } else {
            setActiveSubcategory(subcategory);
            setDisplayedItems(subcategory.items); // Set items to display
        }
    };

    const handleItemClick = (item) => {
        // Handle item click if needed (e.g., open in new tab)
        window.open(item, '_blank');
        setIsOpen(false);
    };

    const filteredCategories = categories.filter(category =>
        category.title.toLowerCase().includes(search.toLowerCase()) ||
        (category.subcategories && category.subcategories.some(subcategory =>
            subcategory.name.toLowerCase().includes(search.toLowerCase()) ||
            (subcategory.items && subcategory.items.some(item =>
                item.toLowerCase().includes(search.toLowerCase())
            ))
        ))
    );

    return (
        <>
            {isOpen && (
                <div className="sidebar-overlay" onClick={() => setIsOpen(false)}>
                    <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                        <div className="sidebar-header">
                            <div className='searchHeader'>
                                <h2>All Courses</h2>
                                <button onClick={() => setIsOpen(false)}>&times;</button>
                            </div>
                            <div className="navbarSearch-container">
                                <Search className="search-icon" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search / Select Your Preferred Course"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="search-input-sidebar"
                                />
                            </div>
                        </div>
                        <nav className="sidebar-nav">
                            {filteredCategories.map((category) => (
                                <div key={category.id}>
                                    <div
                                        className="sidebar-link category-title"
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category.title}
                                        {category.subcategories && category.subcategories.length > 0 && (
                                            <span>{activeCategory === category ? "-" : "+"}</span>
                                        )}
                                    </div>
                                    {activeCategory === category && category.subcategories && (
                                        <div>
                                            {category.subcategories.map((subcategory) => (
                                                <div key={subcategory.name}>
                                                    <div
                                                        className="sidebar-link subcategory-title"
                                                        onClick={() => handleSubcategoryClick(category, subcategory)}
                                                    >
                                                        {subcategory.name}
                                                        {subcategory.items && subcategory.items.length > 0 && (
                                                            <span>{activeSubcategory === subcategory ? "-" : "+"}</span>
                                                        )}
                                                    </div>
                                                    {activeSubcategory === subcategory && displayedItems && (
                                                        <div>
                                                            {displayedItems.map((item, index) => (
                                                                <a
                                                                    key={index}
                                                                    href={item}
                                                                    className="sidebar-link item-link"
                                                                    onClick={() => handleItemClick(item)}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {item}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;