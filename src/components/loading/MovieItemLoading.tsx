import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const MovieItemLoading: React.FC = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm mb-4" style={{ height: '450px', borderRadius: '5px' }}>
      <div className="card-img-skeleton mb-3">
        <p className="text-muted text-sm mb-6 lh-1">
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>
              <LoadingSkeleton height="10px" />
              <div className="h-2"></div>
            </React.Fragment>
          ))}
          <h3 className="h4 text-dark font-weight-bold mb-4">
            <LoadingSkeleton height="10px" />
          </h3>
        </p>
      </div>
    </div>
  );
};

export default MovieItemLoading;
