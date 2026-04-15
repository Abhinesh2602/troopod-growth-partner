import { Link, useLocation, useNavigate } from "react-router-dom";
import troopodLogo from "@/assets/troopod-logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("solutions");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#solutions");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/">
          <img src={troopodLogo} alt="Troopod" className="h-7" />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="/#solutions"
            onClick={handleSolutionsClick}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-card text-foreground border border-border px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Solutions
          </a>
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
