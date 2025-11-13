import { useState, useEffect, useRef } from "react";

function Home() {
  const [isActive, setIsActive] = useState(null);
  const [isLoadingLong, setIsLoadingLong] = useState(null);
  const [isBackgroundImage, setIsBackgroundImage] = useState(null);
  const [isShowDetailsText, setIsShowDetailsText] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const items = [
    { id: 1, key: "create", image: "/src/assets/background-homepage-0.jpg" },
    { id: 2, key: "design", image: "/src/assets/background-homepage-1.jpg" },
    { id: 3, key: "develop", image: "/src/assets/background-homepage-5.jpg" },
    { id: 4, key: "improve", image: "/src/assets/background-homepage-3.jpg" },
  ];

  const technologyItems = [
    { id: 1, key: "html", image: "/src/assets/html.svg" },
    { id: 2, key: "react", image: "/src/assets/react2.svg" },
    { id: 3, key: "java", image: "/src/assets/java.svg" },
    { id: 4, key: "js", image: "/src/assets/javascript.svg" },
    { id: 5, key: "mysql", image: "/src/assets/mysql.svg" },
    { id: 6, key: "spring", image: "/src/assets/spring.svg" },
    { id: 7, key: "docker", image: "/src/assets/docker.svg" },
  ];

  function handleTextClick(item) {
    if (isActive !== item.id) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setIsLoadingLong(null);
      setIsActive(item.id);
      setIsBackgroundImage(item.image);
    }
  }

  function handleTextHover(item) {
    if (isActive !== item.id) {
      setIsLoadingLong(item.id);
      hoverTimeoutRef.current = setTimeout(() => {
        setIsLoadingLong(null);
        setIsActive(item.id);
        setIsBackgroundImage(item.image);
      }, 2000);
    }
  }

  function handleTextOut() {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      setIsLoadingLong(null);
    }
  }

  useEffect(() => {
    setIsBackgroundImage(items[0].image);
    setIsActive(1);
  }, []);

  const descriptions = [
    { id: 1, text: "Lorem ipsum dolor sit amet..." },
    { id: 2, text: "Lorem ipsum dolor sit amet..." },
    { id: 3, text: "Lorem ipsum dolor sit amet..." },
    { id: 4, text: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <div
     className="home-container flex flex-col w-full">
      {/* Modal */}
      {isShowDetailsText && (
        <div className="absolute inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="h-auto w-[40%] flex flex-col items-center justify-center text-white">
            <p className="homepage-description">
              {descriptions[isActive - 1].text}
            </p>
            <button
              onClick={() => setIsShowDetailsText(false)}
              className="mt-4 px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}

      {/* Sekcja górna (70%) */}
      <div className="flex-[0.8] flex flex-col md:flex-row transition-all duration-500">
        {/* Prawa kolumna */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[50vh] md:h-full relative bg-[#e3e3e3] group">
          <img
            src={isBackgroundImage}
            alt="background"
            className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-125"
          />
          <button
            onClick={() => setIsShowDetailsText(!isShowDetailsText)}
            className="absolute inset-0 m-auto h-20 w-40 bg-black text-white text-lg font-semibold rounded-xl
                       flex items-center justify-center transition-all duration-300 hover:scale-105 hover:text-yellow-500 hover:rounded-none"
          >
            check more
          </button>
        </div>

        {/* Lewa kolumna */}
        <div className="order-2 md:order-1 w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center gap-y-2 bg-black">
          {items.map((item) => (
            <span
              key={item.id}
              className={
                isLoadingLong === item.id
                  ? "homepage-text long"
                  : isActive === item.id
                  ? "homepage-text active"
                  : "homepage-text"
              }
              onClick={() => handleTextClick(item)}
              onMouseEnter={() => handleTextHover(item)}
              onMouseOut={() => handleTextOut()}
            >
              {item.key}
            </span>
          ))}
        </div>
      </div>

      {/* Sekcja dolna (30%) */}
 <div className="flex-[0.2] w-full flex flex-wrap bg-yellow-500 justify-center items-center gap-4 md:gap-10 pt-6 md:pt-2 lg:pt-0 pb-6">


        {technologyItems.map((item) => (
          <img
            key={item.image}
            src={item.image}
            alt={item.key}
            className="object-contain transition-transform duration-300 hover:scale-110"
            style={{ height: "clamp(3rem, 5vw, 6rem)" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
