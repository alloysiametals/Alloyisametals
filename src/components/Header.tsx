import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

interface SearchItem {
  name: string;
  path: string;
  type: "category" | "product";
}


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  const megaMenuData = [
    {
      category: "Nickel Alloys",
      path: "/nickel-alloys",
      products: [
        { slug: "hastelloy-c22", name: "Hastelloy C22" },
        { slug: "hastelloy-c276", name: "Hastelloy C276" },
        { slug: "inconel-718", name: "Inconel 718" },
        { slug: "inconel-600-601", name: "Inconel 600/601" },
        { slug: "inconel-625", name: "Inconel 625" },
        { slug: "inconel-800-800h-800ht", name: "Inconel 800/800H/800HT" },
        { slug: "inconel-625lcf", name: "Inconel 625LCF" },
        { slug: "monel-400-k500", name: "Monel 400" },
        { slug: "monel-k500", name: "Monel K500" },
        { slug: "hastelloy-x", name: "Hastelloy X" },
        { slug: "alloy-263", name: "Alloy 263" },
        { slug: "hastelloy-b2-b3", name: "Hastelloy B2/B3" },
      ],
    },
    {
      category: "Stainless Steel",
      path: "/products/stainless-steel",
      products: [
        { slug: "stainless-steel-304-304l", name: "Stainless Steel 304/304L" },
        { slug: "stainless-steel-316-316l", name: "Stainless Steel 316/316L" },
        { slug: "stainless-steel-310-310s", name: "Stainless Steel 310/310S" },
        { slug: "stainless-steel-347-347h", name: "Stainless Steel 347/347H" },
        { slug: "stainless-steel-317l", name: "Stainless Steel 317L" },
        { slug: "stainless-steel-321-321h", name: "Stainless Steel 321/321H" },
      ],
    },
    {
      category: "Titanium Alloys",
      path: "/products/titanium-alloys",
      products: [
        { slug: "titanium-grade-1", name: "Titanium Grade 1" },
        { slug: "titanium-grade-2", name: "Titanium Grade 2" },
        { slug: "titanium-grade-5", name: "Titanium Grade 5" },
        { slug: "titanium-grade-7", name: "Titanium Grade 7" },
        { slug: "titanium-grade-12", name: "Titanium Grade 12" },
      ],
    },
    {
      category: "Aerospace Alloys",
      path: "/aerospace-alloys",
      products: [
        { slug: "waspaloy", name: "Waspaloy" },
        { slug: "kovar-alloy", name: "Kovar Alloy" },
        { slug: "greek-ascoloy-418", name: "Greek Ascoloy 418" },
        { slug: "custom-455", name: "Custom 455" },
        { slug: "invar-36", name: "Invar 36" },
        { slug: "rene-41", name: "Rene 41" },
        { slug: "alloy-a286", name: "Alloy A-286" },
        { slug: "alloy-330", name: "Alloy 330" },
        { slug: "alloy-350", name: "Alloy 350" },
        { slug: "Alloy13-8", name: "Alloy 13-8" },
        { slug: "Haynes188", name: "Haynes 188" },
        { slug: "Inconel722", name: "Inconel 722" },
        { slug: "alloy-l605", name: "Alloy L605" },
        { slug: "alloy-x750-annealed", name: "Alloy X750 Annealed" },
        { slug: "Alloy 925", name: "Alloy 925" },
        { slug: "nimonic-75", name: "Nimonic 75" },
        { slug: "nimonic-80a", name: "Nimonic 80A" },
        { slug: "alloy-602ca", name: "Alloy 602CA" },
      ],
    },
    {
      category: "Austenitic Stainless & Duplex Alloys",
      path: "/austenitic-stainless-duplex-alloys",
      products: [
        { slug: "duplex-2205", name: "Duplex 2205" },
        { slug: "alloy-32750", name: "Alloy 32750" },
        { slug: "alloy-32760", name: "Alloy 32760" },
        { slug: "ferrallium-255", name: "Ferrallium 255" },
        { slug: "17-4-ph", name: "17-4 PH" },
        { slug: "15-5-ph", name: "15-5 PH" },
        { slug: "nitronic-50", name: "Nitronic 50" },
        { slug: "nitronic-60", name: "Nitronic 60" },
        { slug: "alloy-254", name: "Alloy 254" },
        { slug: "alloy-20", name: "Alloy 20" },
      ],
    },
    {
      category: "Other Miscellaneous Alloys",
      path: "/products/other-miscellaneous-alloys",
      products: [
        { slug: "carbon-steel", name: "Carbon Steel" },
        { slug: "alloy-steel", name: "Alloy Steel" },
        { slug: "lsaw-pipe", name: "LSAW Pipe" },
        { slug: "hardox-steel", name: "Hardox Steel" },
        { slug: "ams-certified-aluminum", name: "AMS Certified Aluminum" },
      ],
    },
  ];

  const productCategories = megaMenuData.map((c) => ({
    name: c.category,
    path: c.path,
  }));

  const allProducts = megaMenuData.flatMap((group) =>
    group.products.map((p) => ({
      name: p.name,
      path: `/products/${p.slug}`,
      type: "product" as const,
    }))
  );

  const normalizeString = (str: string) =>
    str.trim().toLowerCase().replace(/\s+/g, " ");

  const handleSearch = () => {
    const normalizedQuery = normalizeString(searchQuery);
    if (!normalizedQuery) return;

    const matchingCategory = productCategories.find((c) =>
      normalizeString(c.name).includes(normalizedQuery)
    );

    if (matchingCategory) {
      navigate(matchingCategory.path);
      closeSearch();
      return;
    }

    const matchingProduct = allProducts.find((p) =>
      normalizeString(p.name).includes(normalizedQuery)
    );

    if (matchingProduct) {
      navigate(matchingProduct.path);
      closeSearch();
      return;
    }

    alert(`No matching category or product found for: ${searchQuery}`);
    closeSearch();
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setFilteredResults([]);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    const normalized = normalizeString(value);
    if (normalized) {
      const matchingCategories = productCategories
        .filter((c) => normalizeString(c.name).includes(normalized))
        .map((c) => ({
          name: c.name,
          path: c.path,
          type: "category" as const,
        }));

      const matchingProducts = allProducts.filter((p) =>
        normalizeString(p.name).includes(normalized)
      );

      setFilteredResults([...matchingCategories, ...matchingProducts]);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSuggestionClick = (path: string) => {
    navigate(path);
    closeSearch();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileActiveCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    
  <header className="w-full font-sans sticky top-0 z-50 shadow-sm bg-white">
    {/* Top Bar */}
    <div className="bg-gray-900 text-white text-sm py-2 px-4 border-b border-white/20 font-lato">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto flex-wrap gap-y-2">
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <a href="tel:+919175745219" className="flex items-center gap-1 hover:text-yellow-400">
            <i className="fas fa-phone-alt"></i>
            <span>+91-9004965999</span>
          </a>
          <a href="mailto:sales@alloysiametals.com" className="flex items-center gap-1 hover:text-yellow-400">
            <i className="fas fa-envelope"></i>
            <span>sales@alloysiametals.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-base">
          <a href="https://in.linkedin.com/company/alloysia-metals" className="hover:text-yellow-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-yellow-400">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    {/* Logo & Desktop Menu */}
    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-5 relative">
      <Link to="/" onClick={handleLinkClick}>
       <img
  src={logo}
  alt="Logo"
  className="h-20 md:h-28  md:w-72 object-contain"
/>


      </Link>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-4 md:hidden">
        <button className="text-gray-800 text-2xl" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-12 uppercase font-semibold text-gray-700 text-sm font-montserrat">
        {navLinks.map(({ name, path, hasDropdown }) => (
          <div key={name} className="relative group">
            <Link
              to={path}
              onClick={handleLinkClick}
              className="relative hover:text-yellow-500 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 flex items-center gap-1"
            >
              {name}
              {hasDropdown && <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>}
            </Link>
            {hasDropdown && (
              <div className="absolute top-full left-1/2 transform -translate-x-[90%] w-auto min-w-[900px] max-h-[400px] overflow-y-auto bg-white shadow-xl border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {megaMenuData.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">
                        <Link
                          to={group.path}
                          onClick={handleLinkClick}
                          className="hover:text-yellow-600"
                        >
                          {group.category}
                        </Link>
                      </h4>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            to={group.path}
                            onClick={handleLinkClick}
                            className="text-xs text-gray-700 hover:text-yellow-500 transition-colors"
                          >
                            All {group.category}
                          </Link>
                        </li>
                        {group.products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              to={`/products/${product.slug}`}
                              onClick={handleLinkClick}
                              className="text-xs text-gray-700 hover:text-yellow-500 transition-colors"
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>

    {/* Mobile Slide Menu */}
    <div
      className={`fixed top-0 left-0 h-full w-full sm:w-72 z-[60] transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white shadow-lg`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end mb-6">
          <button onClick={toggleMenu} className="text-3xl text-gray-800 hover:text-yellow-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2 text-gray-800 font-semibold text-lg">
            {navLinks.map(({ name, path, hasDropdown }) => (
              <div key={name}>
                {hasDropdown ? (
                  <>
                    {!mobileProductsOpen ? (
                      <button
                        onClick={() => setMobileProductsOpen(true)}
                        className="w-full flex items-center justify-between hover:text-yellow-500 py-3 px-3 hover:bg-gray-50 rounded-md"
                      >
                        <span className="flex items-center">
                          <i className="fas fa-chevron-right mr-3 text-sm text-yellow-500"></i>
                          {name}
                        </span>
                        <i className="fas fa-chevron-down text-sm"></i>
                      </button>
                    ) : !mobileActiveCategory ? (
                      <div>
                        <button
                          onClick={() => setMobileProductsOpen(false)}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-yellow-500 py-2 px-3"
                        >
                          <i className="fas fa-chevron-left"></i>
                          Back
                        </button>
                        {megaMenuData.map((group) => (
                          <button
                            key={group.category}
                            onClick={() => setMobileActiveCategory(group.category)}
                            className="block py-2 px-3 w-full text-left text-gray-800 hover:text-yellow-500 hover:bg-gray-50 rounded"
                          >
                            {group.category}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => setMobileActiveCategory(null)}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-yellow-500 py-2 px-3"
                        >
                          <i className="fas fa-chevron-left"></i>
                          Back to Categories
                        </button>
                        <Link
                          to={
                            megaMenuData.find((c) => c.category === mobileActiveCategory)?.path ||
                            "#"
                          }
                          onClick={handleLinkClick}
                          className="block py-2 px-3 text-gray-800 hover:text-yellow-500 hover:bg-gray-50 rounded"
                        >
                          All {mobileActiveCategory}
                        </Link>
                        <div className="overflow-y-auto max-h-[60vh]">
                          {megaMenuData
                            .find((c) => c.category === mobileActiveCategory)
                            ?.products.map((product) => (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                onClick={handleLinkClick}
                                className="block py-1 px-6 text-xs text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded"
                              >
                                {product.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={path}
                    onClick={handleLinkClick}
                    className="hover:text-yellow-500 py-3 px-3 hover:bg-gray-50 rounded-md block"
                  >
                    <i className="fas fa-chevron-right mr-3 text-sm text-yellow-500"></i>
                    {name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-3">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-yellow-500"></i>
              <span>+91-9004965999</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-yellow-500"></i>
              <span>sales@alloysiametals.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Search Modal */}
    {isSearchOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-[70] flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
          <div className="flex items-center px-4 py-3 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent border-b border-yellow-400 focus:outline-none text-gray-700 placeholder-gray-400 text-base px-2 py-1"
              autoFocus
            />
            <button
              onClick={handleSearch}
              className="ml-2 text-yellow-500 hover:text-yellow-600 text-lg"
              aria-label="Search"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              onClick={closeSearch}
              className="ml-2 text-gray-500 hover:text-red-500 text-lg"
              aria-label="Close search"
            >
              <i className="fas fa-times"></i>
            </button>

            {filteredResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded shadow z-50">
                {filteredResults.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleSuggestionClick(item.path)}
                    className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-sm text-gray-700"
                  >
                    {item.type === "category" && (
                      <span className="text-yellow-500 mr-2">[Category]</span>
                    )}
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </header>
  );
};

export default Header;




