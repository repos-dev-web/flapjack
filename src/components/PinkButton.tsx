type Props = {
  class?: string;
  children: any;
  [string: string]: any;
};

export default function PinkButton({
  class: className,
  children,
  ...rest
}: Props) {
  return (
    <button
      class={`flex cursor-pointer items-center justify-center gap-3 rounded-md border-none bg-red-400 px-4 py-2 text-base font-bold text-red-100 shadow-md hover:bg-red-400 hover:text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
