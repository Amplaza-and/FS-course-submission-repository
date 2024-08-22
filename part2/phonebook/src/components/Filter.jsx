const Filter = (props) => {
  const {value, action} = props
  const handleFilterChange = (func) => (event)=> {
    console.log({value})
    console.log('evento',event.target.value)
    func(event.target.value)
  }
    console.log(value, action)
      return (    
        <p>        
          filter show with 
                <input
                  value={value}
                  onChange={handleFilterChange(action)}
                />
        </p>      )
    }

export default Filter
