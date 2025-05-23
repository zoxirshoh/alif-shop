"use client"

import { useState } from "react"
import { FaBars } from "react-icons/fa6";
import "./catalog.css"

export function Catalog({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  const toggleCatalog = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryHover = (index) => {
    setActiveCategory(index)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className="open-button" style={{width: "150px",}} onClick={toggleCatalog}>
        <FaBars /> Tovarlar katalogi
      </button>

      {isOpen && (
        <div className="alif-catalog-dropdown">
          {/* Left sidebar - main categories */}
          <div className="alif-catalog-sidebar">
            {data.map((category, index) => (
              <div
                key={index}
                className={`alif-catalog-category ${activeCategory === index ? "active" : ""}`}
                onMouseEnter={() => handleCategoryHover(index)}
              >
                <span>{category.title.titleName}</span>
              </div>
            ))}
          </div>

          {/* Right content - subcategories */}
          <div className="alif-catalog-content">
            <button onClick={handleClose} className="alif-close-button" style={{width: "60px", height: "30px",}}>
              <span className="alif-close-icon">×</span>
            </button>

            {activeCategory !== null && data[activeCategory] && (
              <div className="alif-subcategory-grid">
                {data[activeCategory].collection.map((item, idx) => (
                  <div key={idx} className="alif-subcategory-column">
                    <h3 className="alif-subcategory-title">{item.collectionItemName}</h3>
                    <ul className="alif-subcategory-list">
                      {item.collectionItemLinks.map((link, linkIdx) => (
                        <li key={linkIdx} className="alif-subcategory-item">
                          <a href="#" className="alif-subcategory-link">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}