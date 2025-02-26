
import "../assets/styles/Navbar.css"
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronDown, Search } from "lucide-react"
import Logo from "../assets/navimages/logo-chanel.png"
import reviewimg from "../assets/navimages/review-banner-header.svg"
import Sidebar from "./Sidebar"
import profileimg1 from "../assets/navimages/india-review-banner.svg"
import profilelogo from "../assets/navimages/profile-logo.png"
import instagramLogo from "../assets/navimages/insta.png"
import linkedinLogo from "../assets/navimages/linkedin.png"
import facebookLogo from "../assets/navimages/facebook.png"
import twitterLogo from "../assets/navimages/twitter.png"

const courses = [
  { title: "B.Tech", href: "/courses/btech" },
  { title: "MBA", href: "/courses/mba" },
  { title: "M.Tech", href: "/courses/mtech" },
  { title: "MBBS", href: "/courses/mbbs" },
  { title: "B.Com", href: "/courses/bcom" },
  { title: "B.Sc", href: "/courses/bsc" },
  { title: "B.Sc (Nursing)", href: "/courses/bsc-nursing" },
  { title: "BA", href: "/courses/ba" },
  { title: "BBA", href: "/courses/bba" },
  { title: "BCA", href: "/courses/bca" },
]

function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubcategory, setActiveSubcategory] = useState(null)
  const [search, setSearch] = useState("")
  const [courseSearch, setCourseSearch] = useState("")

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setActiveSubcategory(null) // Reset subcategory when category changes
  }

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory)
  }

  const [isOpen, setIsOpen] = useState(false) // Sidebar toggle state

  // Function to handle sidebar toggling
  const toggleSidebar = () => setIsOpen(!isOpen)

  //explore dropdown logic
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const exploreDropdownRef = useRef(null)

  const toggleExploreDropdown = () => {
    setIsExploreOpen(!isExploreOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
        setIsExploreOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  //Profile dropdown logic
  const [isProfileOpen, setIsProfileOpen] = useState(false) // State for profile dropdown
  const profileDropdownRef = useRef(null) // Ref for click outside

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Goal/Course and City Selection Logic
  const [isGoalOpen, setIsGoalOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState(null)
  const [showCitySelection, setShowCitySelection] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)
  const goalDropdownRef = useRef(null)

  const goals = {
    Engineering: {
      icon: "👨‍💻",
      courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    },
    Management: {
      icon: "📊",
      courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
    },
    Commerce: {
      icon: "💼",
      courses: ["B.Com", "M.Com"],
    },
    Medical: {
      icon: "👨‍⚕️",
      courses: ["MBBS", "BDS"],
    },
  }

  const cities = [
    { name: "New Delhi", icon: "🏛️" },
    { name: "Gurgaon", icon: "🌆" },
    { name: "Noida", icon: "🏢" },
    { name: "Mumbai", icon: "🌊" },
    { name: "Chennai", icon: "🌊" },
    { name: "Kolkata", icon: "🌉" },
    { name: "Hyderabad", icon: "🏰" },
    { name: "Bangalore", icon: "🌆" },
    { name: "Pune", icon: "🏛️" },
    { name: "Ahmedabad", icon: "🕌" },
    { name: "Lucknow", icon: "🏰" },
    { name: "Coimbatore", icon: "🏭" },
  ]
  const states = [
    { name: "Maharashtra", icon: "🏛️" },
    { name: "Delhi", icon: "🌆" },
    { name: "Punjab", icon: "🏢" },
    { name: "Rajasthan", icon: "🌊" },
    { name: "Gujarat", icon: "🌊" },
    { name: "Kerala", icon: "🌉" },
    { name: "Andra Pradesh", icon: "🏰" },
    { name: "Karnataka", icon: "🌆" },
    { name: "Kerala", icon: "🏛️" },
    { name: "Karnataka", icon: "🕌" },
    { name: "Punjab", icon: "🏰" },
    { name: "Delhi", icon: "🏭" },
  ]

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal)
    setShowCitySelection(true)
    setIsGoalOpen(false)
    setIsProfileOpen(false) // Close profile dropdown
  }

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    setShowCitySelection(false)
    setIsGoalOpen(false)
  }

  const filteredGoals = Object.entries(goals).reduce((acc, [category, { icon, courses }]) => {
    const filteredCourses = courses.filter((course) => course.toLowerCase().includes(courseSearch.toLowerCase()))
    if (filteredCourses.length > 0) {
      acc[category] = { icon, courses: filteredCourses }
    }
    return acc
  }, {})

  return (
    <div className="navbar-container">
      <div className="navbar-main">
        {/* Logo */}
        <a href="/" className="navbarlogo">
          <img src={Logo || "/placeholder.svg"} alt="Collegedunia Logo" className="logo-image" />
        </a>

        {/* Select Goal Button  */}

        <div className="goal-dropdown" ref={goalDropdownRef}>
          <button
            className="goal-button"
            style={{ border: "none" }}
            onClick={() => {
              setIsGoalOpen(!isGoalOpen)
              setShowCitySelection(false)
            }}
          >
            <div className="goalpara">
              <div className="flex items-center">
                <span style={{ color: "orange" }}>Select Goal & City</span>
              </div>
              <div className="goalSelectText ">
                {selectedGoal && selectedCity ? `${selectedGoal}, ${selectedCity}` : "Select Goal"}
                <ChevronDown className="h-2 w-2" />
              </div>
            </div>
          </button>

          {isGoalOpen && !showCitySelection && (
            <div className="goal-dropdown-content">
              <div className="p-4 goalDropdown">
                <div className="goalDropdownHeader">
                  <h3 className="text-small font-semibold mb-4">Select Your Study Preference</h3>
                  <div className="navbarSearch-container" style={{ width: "90%" }}>
                    <Search className="navbarsearch-icon" size={18} />
                    <input
                      type="text"
                      placeholder="Search for courses..."
                      value={courseSearch}
                      onChange={(e) => setCourseSearch(e.target.value)}
                      className="search-input"
                    />
                  </div>
                </div>

                <div className="space-y-6 goalItemsContainer">
                  {Object.entries(filteredGoals).map(([category, { icon, courses }]) => (
                    <div key={category} className="goal-category">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">
                          <span className="text-2xl">{icon}</span>
                          {category}
                        </h4>
                      </div>
                      <ul className="space-y-1" style={{ display: "flex", flexDirection: "row" }}>
                        {courses.map((course) => (
                          <li
                            key={course}
                            onClick={() => handleGoalSelect(course)}
                            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer goalOptionItem"
                          >
                            {course}
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {showCitySelection && (
            <div className="goal-dropdown-content">
              <div className="p-4 goalDropdown">
                <div className="studypref-container">
                  <h3 className="navbartitle">Select Your Study Preference</h3>
                  <p className="subtitle">
                    Your Selected Goal is:
                    <span className="highlight"> ✔ Country: India</span>
                    <span className="highlight"> ✔ Course: {selectedGoal}</span>
                  </p>

                  <div className="navbarSearch-container">
                    <Search className="search-icon" size={18} />
                    <input
                      type="text"
                      placeholder="Search / Select Your Preferred City or State"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="search-input"
                    />
                  </div>

                  <h3 className="popular-title">Popular Cities</h3>
                  <div className="grid">
                    {cities
                      .filter((city) => city.name.toLowerCase().includes(search.toLowerCase()))
                      .map((city) => (
                        <div key={city.name} className="city-card" onClick={() => handleCitySelect(city.name)}>
                          <span className="city-icon">{city.icon}</span>
                          {city.name}
                        </div>
                      ))}
                  </div>

                  <h3 className="popular-title">Popular States</h3>
                  <div className="grid">
                    {states
                      .filter((state) => state.name.toLowerCase().includes(search.toLowerCase()))
                      .map((state) => (
                        <div key={state.name} className="city-card">
                          <span className="city-icon">{state.icon}</span>
                          {state.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div
          class="navbarSearch-container"
          style={{ display: "flex", alignItems: "center", padding: "5px", borderRadius: "5px" }}
        >
          <svg
            class="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="search" placeholder="Search for Colleges, Exams, Courses and More.." class="search-input" />
        </div>

        {/* Right Side Buttons */}
        <div className="nav-buttons">
          <button className="review-button">Write a Review</button>
          <div className="explore-dropdown" ref={exploreDropdownRef}>
            <button className="explore-button" onClick={toggleExploreDropdown}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="2" fill="black" />
                <circle cx="12" cy="5" r="2" fill="black" />
                <circle cx="19" cy="5" r="2" fill="black" />
                <circle cx="5" cy="12" r="2" fill="black" />
                <circle cx="12" cy="12" r="2" fill="black" />
                <circle cx="19" cy="12" r="2" fill="black" />
                <circle cx="5" cy="19" r="2" fill="black" />
                <circle cx="12" cy="19" r="2" fill="black" />
                <circle cx="19" cy="19" r="2" fill="black" />
              </svg>
              Explore
            </button>
            {isExploreOpen && (
              <div class="explore-dropdown-content">
                <div className="explore-dropdown-heading">Explore More</div>
                <div class="row">
                  <div class="column">
                    <a href="#">Top Universities & Colleges</a>
                    <a href="#">Top Courses</a>
                    <a href="#">Read College Reviews</a>
                    <a href="#">Admission Alerts 2025</a>
                    <a href="#">Institute (Counselling, Coaching and More)</a>
                    <a href="#">College Predictor</a>
                    <a href="#">Practice Questions</a>
                    <a href="#">Scholarship</a>
                  </div>
                  <div class="column">
                    <a href="#">
                      Study Abroad <span class="highlight">Get upto 50% discount on Visa Fees</span>
                    </a>
                    <a href="#">Abroad Exams</a>
                    <a href="#">Exams</a>
                    <a href="#">News</a>
                    <a href="#">Education Loan</a>
                    <a href="#">Ask a Question</a>
                    <a href="#">Test Series</a>
                    <a href="#">Course Finder</a>
                    <a href="#">Top Coupons</a>
                  </div>

                  <div class="review-card">
                    <img src={reviewimg || "/placeholder.svg"} alt="Review Image" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="profile-dropdown" ref={profileDropdownRef}>
            <button className="profile-button" onClick={toggleProfileDropdown}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown-content">
                <div className="profile-logo-container">
                  <div className="profile-logo" style={{ backgroundColor: "##edf9ff", width: "100%" }}>
                    <img src={profilelogo || "/placeholder.svg"} style={{ width: "3rem" }}></img>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                      <div style={{ fontSize: "15px", padding: "0.1rem", textWrap: "nowrap" }}>
                        Hello, Welcome To Collegedunia
                      </div>
                      <div style={{ fontSize: "13px" }}>Search Colleges, Exams, Courses & More </div>
                    </div>
                  </div>
                  <div class="button-container">
                    <button
                      className="location-button"
                      onClick={() => {
                        setIsProfileOpen(false)
                        setIsGoalOpen(true)
                      }}
                    >
                      {selectedGoal && selectedCity ? `${selectedGoal}, ${selectedCity}` : "Select a Goal"}
                      <span className="edit-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0L10.59 15.41c-.05.05-.08.11-.12.16l-4.22 1.4c-.76.25-1.68-.22-1.42-.99l1.4-4.22c.05-.04.11-.08.16-.12L16.96 3.29c.39-.39 1.02-.39 1.41 0l2.34 2.34c.38.38.39 1.01 0 1.4zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <Link to="/login"><button class="login-button">Login</button></Link>
                  </div>
                </div>
                <div style={{ margin: "0.5rem" }}>
                  <img src={profileimg1 || "/placeholder.svg"}></img>
                  <img src={profileimg1 || "/placeholder.svg"}></img>
                </div>
                <div className="socials-logo">
                  <a href="#">
                    <img
                      src={twitterLogo || "/placeholder.svg"}
                      style={{ width: "2rem", padding: "0", height: "auto" }}
                    ></img>
                  </a>
                  <a href="#">
                    <img
                      src={facebookLogo || "/placeholder.svg"}
                      style={{ width: "2.5rem", padding: "0", height: "auto" }}
                    ></img>
                  </a>
                  <a href="#">
                    <img
                      src={linkedinLogo || "/placeholder.svg"}
                      style={{ width: "2rem", padding: "0", height: "auto" }}
                    ></img>
                  </a>
                  <a href="#">
                    <img
                      src={instagramLogo || "/placeholder.svg"}
                      style={{ width: "2.5rem", padding: "0", height: "auto" }}
                    ></img>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Course Navigation */}
      <div
        className="mobile-nav "
        style={{
          backgroundColor: "##f0f0f0",
          fontSize: "small",
          fontWeight: "500",
        }}
      >
        <a className="mobile-nav-link" style={{ fontWeight: "600" }}>
        <button
          className="menu-button "
          onClick={toggleSidebar}
          style={{
            color: "white",
            fontSize: "small",
            fontWeight: "700",
            whitespace: "nowrap",
            color: "black",
          }}
        >

        All Courses
        </button>
        </a>
        <a href="/btech_colleges" className="mobile-nav-link">
  B.Tech
</a>
<a href="/mba" className="mobile-nav-link">
  MBA
</a>
<a href="/mtech" className="mobile-nav-link">
  M.Tech
</a>
<a href="/mbbs" className="mobile-nav-link">
  MBBS
</a>
<a href="/bcom" className="mobile-nav-link">
  B.Com
</a>
<a href="/bsc" className="mobile-nav-link">
  B.Sc
</a>
<a href="/bsc-nursing-colleges" className="mobile-nav-link">
  B.Sc(Nursing)
</a>
<a href="/ba" className="mobile-nav-link">
  B.A
</a>
<a href="/bba" className="mobile-nav-link">
  B.B.A
</a>
<a href="/bca" className="mobile-nav-link">
  BCA
</a>



  <button
    className="course-finder-button"
    style={{
      marginRight: "1rem",
      fontSize: "small",
      fontWeight: "600",
      color: "black",
    }}
  >
    Course Finder
  </button>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} courses={courses} />
      </div>
    </div>
  )
}

export default Navbar

