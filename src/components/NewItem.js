import {useState} from "react"

const NewItem = ({createItem}) => {
    const initialFormState = {
        name: "",
        description: "",
        price: 0,
        image: ""
      }
      
    const [formData, setFormData] = useState(initialFormState)

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createItem(formData)
        setFormData(initialFormState)
    }

    return (
        <div className='formcontent'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    name="name"
                    onChange={handleInput}>
                    </input>
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    onChange={handleInput}>
                </input>
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    onChange={handleInput}>
                </input>
                <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    onChange={handleInput}>
                </input>
                <input type="submit" value="Create Item" />
            </form>
        </div>
    )
}

export default NewItem