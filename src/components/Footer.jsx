export default function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '40px 0', 
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '60px'
    }}>
      <div className="container">
        <p>© {new Date().getFullYear()} Al Nafeel. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Built with React & Vite</p>
      </div>
    </footer>
  );
}
