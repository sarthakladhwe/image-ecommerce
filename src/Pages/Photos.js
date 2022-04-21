import React from 'react'
import Image from '../Components/Image'
import { Context } from '../Context'

export default function Photos() {

    const {images} = React.useContext(Context)

    const allImages = images.map((img, index) => {
        return (
            <Image key={img.id} img={img} className={getClass(index)} />
        )
    })

    return (
        <main className="photos">
            {allImages}
        </main>
    )
}

function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}