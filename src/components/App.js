import "../css/App.css";
import Header from "./Header/Header";
import "../css/header.css";
import Navigation from "./Navigation/Navigation";
import BannerCarosel from "./BannerCarosel/BannerCarosel";
import Content from "./Content/Content";
import ContentDelhi from "./Content/ContentDelhi";
import ContentTripura from "./Content/ContentTripura";
import ContentKolkata from "./Content/ContentKolkata";
import ContentLudhiyana from "./Content/ContentLudhiyana";
import ContentBanglore from "./Content/ContentBanglore";
import ContentMumbai from "./Content/ContentMumbai";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <BannerCarosel />
      <Content />
      <ContentDelhi />
      <ContentTripura />
      <ContentKolkata />
      <ContentLudhiyana />
      <ContentBanglore />
      <ContentMumbai />
    </div>
  );
}

export default App;
