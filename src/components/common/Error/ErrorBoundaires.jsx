import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🚨 خطای ثبت‌شده:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
          <div className="animate-bounce text-red-500 text-6xl">⚠️</div>
          <h2 className="text-2xl font-bold mt-4 text-red-700">مشکلی رخ داده است!</h2>
          <p className="text-gray-600">لطفاً صفحه را مجدداً بارگذاری کنید یا به پشتیبانی اطلاع دهید.</p>
          <button
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            بارگذاری مجدد 🔄
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;