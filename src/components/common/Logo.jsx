import { Link } from 'react-router-dom';

const Logo = ({ onClick, dark = false }) => {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3 md:gap-4 group">
      {/* Dynamic Animated Crest */}
      <div className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-colors duration-500 ${dark ? 'text-gold hover:text-gold-300' : 'text-gold group-hover:text-white'}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
        >
          <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1.5" />
          <rect x="23" y="23" width="54" height="54" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
        </svg>
        {/* Static inner ring */}
        <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full">
           <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        </svg>
        <span className="font-cormorant text-2xl md:text-3xl font-bold italic leading-none pr-0.5 pt-1">G</span>
      </div>
      
      {/* Typography */}
      <div className="flex flex-col leading-none justify-center">
        <span className={`font-cormorant text-xl md:text-2xl font-bold tracking-widest transition-colors duration-300 ${dark ? 'text-dark group-hover:text-gold' : 'text-cream group-hover:text-gold'}`}>
          GUPTA
        </span>
        <span className="font-dm text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-gold font-medium mt-1">
          RESIDENCY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
