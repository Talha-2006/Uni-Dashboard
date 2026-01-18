function HeaderCard({ greeting, name }) {
    return (
        <div className="header-card">
            <h1 className="header-card-title">
                Good {greeting || 'Morning'}, {name || 'User'}
            </h1>
        </div>
    );
}