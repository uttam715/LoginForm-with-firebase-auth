export default function Input({ placeholder, type, id, className, handleOnChange, value }) {
    return (
      <div className="form-outline mb-4">
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          className={className}
          value={value}
          onChange={(e)=>handleOnChange(e, placeholder)}
        />
      </div>
    );
  }
  