export function BaseButton({
  bgColor,
  textColor,
  text,
  styles = "",
  ...props
}: any) {
  console.log(props);
  return (
    <button
      {...props}
      className={`${styles} ${bgColor} ${textColor} py-3 px-6 rounded-md `}
    >
      {text}
    </button>
  );
}

export function PrimaryButton({ styles, ...props }: any) {
  return (
    <BaseButton
      {...props}
      textColor="text-slate-200 "
      bgColor="bg-slate-800"
      styles={`${styles} font-semibold`}
    />
  );
}

export function TextButton({ styles, ...props }: any) {
  return (
    <BaseButton
      {...props}
      textColor="text-slate-400"
      styles={` ${styles} font-semibold`}
    />
  );
}

export function ConfirmButton({ styles, ...props }: any) {
  return (
    <BaseButton
      {...props}
      bgColor="bg-violet-600"
      textColor="text-slate-100"
      styles={` ${styles} font-semibold hover:bg-violet-500`}
    />
  );
}
