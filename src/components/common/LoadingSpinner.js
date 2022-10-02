import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container" data-testid="pokemon-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
