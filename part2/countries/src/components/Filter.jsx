const Filter = (props) => {
  const {value, action} = props
  const handleFilterChange = (func) => (event)=> {
    func(event.target.value)
  }
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
