function HeaderCard({ greeting, name }) {
    return (
        <div style={{
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '24px 12px',
            marginBottom: '24px',
            maxWidth: '1350px',
            width: '100%',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <h1 style={{ 
                color: '#FFFFFF', 
                margin: 0,
                fontSize: '28px',
                fontWeight: '500',
                letterSpacing: '-0.3px'
            }}>
                Good {greeting || 'Morning'}, {name || 'User'}
            </h1>
        </div>
    );
}
