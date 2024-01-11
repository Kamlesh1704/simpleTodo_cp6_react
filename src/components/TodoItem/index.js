// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  const ondelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
