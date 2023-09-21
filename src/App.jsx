import { useEffect, useState } from 'react'
import './App.css'
import { ListCard } from './components/ListCard'  
//https://restcountries.com/v3.1/subregion/Northern Europe
function App() {
  const [countries, setCountries] = useState()
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/subregion/Northern Europe')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        data.sort((a, b) => {
          if(a.name.common < b.name.common) { return -1; }
          else if(a.name.common > b.name.common) { return 1; }
          else { return 0; }
          
        })
        setCountries(data)
        
      })
  }, [])

  return (
      <div className='app_container min-h-screen bg-slate-800' >
        <div className='text_container wax-w-7xl mx-auto px-4'>
        <h1 className='text-gray-50 text-4xl'>Europe country data</h1>
        <p className='text-gray-100 text-xl mb-8'>Click on card reveal a country's information</p>
        </div>
        {countries && ( 
          <ul className='grid min-[500px]:grid-cols-2 md:grid-col-3 lg:grid-cols-4 auto-rows-[200px] gap-5 '>
              {countries.map((country, index) => (
                console.log(country),
                <ListCard key={index} country={country} />
              ))}
          </ul>
          )}
      </div>

      
    
  )
}

export default App
