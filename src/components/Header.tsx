import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import troopodLogo from "@/assets/troopod-logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById("solutions");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#solutions");
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/">
          <img src={troopodLogo} alt="Troopod" className="h-7" />
        </Link>
        <div className="flex items-center gap-4">
          {/* Solutions Dropdown */}
          <div className="relative hidden md:block" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg bg-card text-foreground border border-border px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors gap-1.5"
            >
              Solutions
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="absolute top-full mt-2 left-0 min-w-[160px] rounded-lg border border-border bg-card shadow-lg overflow-hidden z-50">
                <a
                  href="/#solutions"
                  onClick={handleBrandClick}
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Brands
                </a>
                <Link
                  to="/agency"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Agencies
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/case-studies"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-card text-foreground border border-border px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Case Studies
          </Link>
          <a
            href="mailto:hello@troopod.io"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Tell us about your brand
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
