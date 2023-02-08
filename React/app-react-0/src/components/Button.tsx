import Like from "./Like"

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {
  return(
    <button style={{cursor: 'pointer'}}>
      <Like />
      {props.children}
    </button>
  )
} 

export default Button