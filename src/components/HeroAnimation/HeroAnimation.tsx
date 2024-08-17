import "../../style/HeroAnimation.css";
import Header from "./Header";

export default function HeroAnimation() {
  return (
    <div className="hero-animation flex justify-center items-center relative z-20">
      <Header />
      <div className="text-animation">
        <p>
          Explore the Possibilities of
        </p>
        <p>
          SOLID EDGE SOLUTIONS
        </p>
      </div>
    </div>
  );
}
