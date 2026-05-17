import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error(`[ErrorBoundary] ${this.props.name || 'Unknown'}:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          margin: '1rem',
          background: '#fee',
          border: '2px solid #e53935',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#e53935' }}>⚠️ Error in: {this.props.name || 'Component'}</h3>
          <p style={{ color: '#333', fontSize: '0.9rem' }}>
            {this.state.error?.message || 'Something went wrong'}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
