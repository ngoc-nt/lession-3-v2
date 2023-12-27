import React from "react";

interface LoadingSkeletonProps {
    height: string | number;
    width?: string | number;
    radius?: string | number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = (props) => {
    return (
        <div
            className="skeleton bg-white p-3 rounded-2xl shadow-sm d-flex flex-column"
            style={{
                height: props.height,
                width: props.width || "100%",
                borderRadius: props.radius,
            }}
        >
            {" "}
        </div>
    );
};

export default LoadingSkeleton;
