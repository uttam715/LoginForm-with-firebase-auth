export default function Button({ value, handleOnClick, ...props }) {
    return (
      <div className="d-grid">
        <button type="button" className="btn btn-primary" onClick={handleOnClick} {...props}>
          {value}
        </button>
      </div>
    );
  }
  