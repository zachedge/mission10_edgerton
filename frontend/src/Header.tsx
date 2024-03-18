function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      {/* <div className="col 4">
        <p>hiya</p>
      </div> */}
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <h5 className="text-white">
          Welcome to the Bowling League's official database site! Here you will
          find much information about the teams and their members!
        </h5>
      </div>
    </header>
  );
}

export default Header;
