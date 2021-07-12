import "./header.css";

export default function Header({theme}) {
  return (
    <div className={"header"+theme}>
      <div className={"headerTitles"+theme}>
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Fanfic</span>
      </div>
      <img
        className={"headerImg"+theme}
                src="https://images4.alphacoders.com/674/thumb-1920-674230.jpg"
                alt=""
            />
        </div>
    );
}

