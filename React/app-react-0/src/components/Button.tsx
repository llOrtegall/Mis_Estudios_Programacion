import Like from './Like'

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button style={{ cursor: 'pointer' }}>
      <Like />
      {props.children}
    </button>
  )
}

export default Button
