import LoadingSkeleton from "./LoadingSkeleton";

export const MovieItemLoading = () => {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-sm mb-4" style={{ height: '450px', borderRadius: '5px' }}>
            {/* Movie Image Placeholder */}
            <div className="card-img-skeleton mb-3">
                <p className="text-muted text-sm mb-6 lh-1">
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>  
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <h3 className="h4 text-dark font-weight-bold mb-4">
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                </h3>
                </p>
            </div>
        </div>
    );
};
