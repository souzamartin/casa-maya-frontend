const Customer = ({customer}) => {
    if (!customer) return <h2>Please Log In</h2>
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
