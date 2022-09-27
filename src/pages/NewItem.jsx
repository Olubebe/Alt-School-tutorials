
import { useNavigate } from 'react-router-dom'

export default function NewItem () {
    let navigate = useNavigate();
  return (
    <div>
        <h1>Create a new item</h1>
        <button
        onClick={() => {
            navigate('/items');
        }}>
        Click Me After Creating a new Item
        </button>
    </div>
  )
}
