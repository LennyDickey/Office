import { Component } from "react";
import { Html } from "@react-three/drei";

class HeroCanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetToken !== this.props.resetToken && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) return this.props.children;

    const { retrying = false } = this.props;
    const message = this.state.error?.message;

    return (
      <Html center>
        <div
          style={{
            maxWidth: 340,
            borderRadius: 12,
            border: "1px solid rgba(255, 255, 255, 0.25)",
            background: "rgba(18, 18, 22, 0.9)",
            padding: "12px 14px",
            color: "#f4f4f5",
            fontSize: 13,
            lineHeight: 1.4,
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
            {retrying
              ? "Hero model failed to load, retrying..."
              : "Hero model failed to load"}
          </h3>
          <p style={{ margin: "8px 0 0", color: "rgba(244, 244, 245, 0.8)" }}>
            {retrying
              ? "Retrying once with a cleared GLTF cache."
              : "Retry failed. Check Basis transcoder and KTX2 setup."}
          </p>
          {message ? (
            <pre
              style={{
                margin: "10px 0 0",
                padding: "8px",
                borderRadius: 8,
                background: "rgba(255, 255, 255, 0.08)",
                color: "rgba(244, 244, 245, 0.95)",
                whiteSpace: "pre-wrap",
                fontSize: 12,
                lineHeight: 1.35,
              }}
            >
              {message}
            </pre>
          ) : null}
        </div>
      </Html>
    );
  }
}

export default HeroCanvasErrorBoundary;
