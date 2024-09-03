import React from 'react'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function SearchBar() {

    const items = [
        {
            id: 0,
            name: 'Dharma'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'HTML'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
      
        console.log(result)
    }

    const handleOnSelect = (item) => {
        
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }


    const formatResult = (item) => {
        return (
            <>
                {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div style={{ width: 300 }}>
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                        />
                    </div>
                </header>
            </div>
        </>
    )
}

export default SearchBar