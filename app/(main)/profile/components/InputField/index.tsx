import { Input } from '@ui/input'

interface Props extends React.ComponentProps<'input'> {
  label: string
  name: string
  error?: string
}

export default function InputField({
  label,
  error,
  type,
  defaultValue,
  name,
  required = false,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-unbounded text-brown text-sm">
        {label}
        {required && <span className="font-unbounded text-red-500">*</span>}
      </label>
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        aria-invalid={error ? 'true' : 'false'}
        className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
