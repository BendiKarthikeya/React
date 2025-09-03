import React from 'react';

const YoutubeHeader2 = () => {
    return (
        <header style={styles.header}>
            <div style={styles.left}>
                <button style={styles.menuButton} aria-label="Open menu">
                    <svg height="24" width="24" viewBox="0 0 24 24">
                        <rect y="4" width="24" height="2" fill="#606060"/>
                        <rect y="11" width="24" height="2" fill="#606060"/>
                        <rect y="18" width="24" height="2" fill="#606060"/>
                    </svg>
                </button>
                <a href="/" style={styles.logoLink}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                        style={styles.logo}
                    />
                </a>
            </div>
            <div style={{flex: 1, maxWidth: 600, display: 'flex', alignItems: 'center', margin: '0 32px' }}>
                <input
                    type="text"
                    placeholder="Search"
                    style={styles.searchInput}
                />
                <button style={styles.searchButton} aria-label="Search">
                    <svg height="24" width="24" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" stroke="#606060" strokeWidth="2" fill="none"/>
                        <line x1="17" y1="17" x2="21" y2="21" stroke="#606060" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
            <div style={styles.right}>
                <button style={styles.iconButton} aria-label="Create">
                    <svg height="24" width="24" viewBox="0 0 24 24">
                        <rect x="10" y="4" width="4" height="16" fill="#606060"/>
                        <rect x="4" y="10" width="16" height="4" fill="#606060"/>
                    </svg>
                </button>
                <button style={styles.iconButton} aria-label="Notifications">
                    <svg height="24" width="24" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 1 0-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z" fill="#606060"/>
                    </svg>
                </button>
                <img
                    src="https://www.gravatar.com/avatar?d=mp"
                    alt="User"
                    style={styles.avatar}
                />
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 16px',
        background: '#fff',
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    left: {
        display: 'flex',
        alignItems: 'center',
    },
    menuButton: {
        background: 'none',
        border: 'none',
        marginRight: 16,
        cursor: 'pointer',
        padding: 8,
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: 24,
    },
    center: {
        display: 'flex',
        flex: 1,
        maxWidth: 600,
        alignItems: 'center',
        margin: '0 32px',
    },
    searchInput: {
        flex: 1,
        height: 32,
        border: '1px solid #ccc',
        borderRadius: '2px 0 0 2px',
        padding: '0 8px',
        fontSize: 16,
        outline: 'none',
    },
    searchButton: {
        height: 32,
        width: 48,
        border: '1px solid #ccc',
        borderLeft: 'none',
        borderRadius: '0 2px 2px 0',
        background: '#f8f8f8',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
    },
    iconButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
    },
    avatar: {
        height: 32,
        width: 32,
        borderRadius: '50%',
        marginLeft: 8,
    },
};

export default YoutubeHeader2;