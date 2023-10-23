import React from 'react'

const Testing = () => {
    // Array 
    const province = ['Malolos','Paombong','Hagonoy','Bulakan','Plaridel']

    // Filter
    const newProvince = province.filter((lugar) => {
        return lugar !== 'Plaridel'
    })

    // Find (you can find only one item)
    const findProvince = province.find((lugar) => {
        return lugar === 'Malolos'
    })

  return (
    <div>
        {province.map((lugar) => ( // Mapping
            <li>                   
                {lugar}
            </li>
        ))}
<br />
        {newProvince.map((lugar) => ( // Filter
            <li>
                {lugar}
            </li>
        ))}
<br />
        <li>
            {findProvince}          {/* Find */}
        </li>
    </div>
  )
}

export default Testing