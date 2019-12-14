import * as React from "react";

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: {}, errorInfo: {}): void {
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something happened wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
