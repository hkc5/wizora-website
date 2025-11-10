import React, { ReactNode, ReactElement } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactElement;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full bg-secondary/50 rounded-lg flex items-center justify-center p-4">
            <div className="text-center">
              <p className="text-sm opacity-70">Unable to load component</p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
