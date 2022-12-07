import Form from './Form'

const Customer = ({customer}) => {
    if (!customer) return (
        <div>
            <h3>Please log in or create an account.</h3>
            <Form />
        </div>
    )
    else return (
        <div>
            <h2>{customer.name}</h2>
            <span>Username: {customer.username}</span> 
            <br/>
            <span>Address: {customer.address}</span>
            <br/>
            <span>Phone: {customer.phone}</span>
        </div>
    )
}

export default Customer
