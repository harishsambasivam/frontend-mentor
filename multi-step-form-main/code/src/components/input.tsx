const Input = ({ label, type, placeholder, name }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="font-medium text-slate-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded p-2 border-2 border-slate-200 placeholder:font-medium placeholder:text-slate-400"
      />
    </div>
  );
};

export default Input;
