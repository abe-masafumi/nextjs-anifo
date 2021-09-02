// propsの型指定
type TodoType = {
  title: string
}

export const Button = (props: TodoType) => {
  const { title } = props

  const onclickLink = () => alert()

  return (
    <div>
      <button onClick={onclickLink}>{title}</button>
    </div>
  )
}
