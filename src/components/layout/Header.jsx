const Header = ({ title, onSearch }) => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">{title}</h1>

                {onSearch && (
                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="header__search-input"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
