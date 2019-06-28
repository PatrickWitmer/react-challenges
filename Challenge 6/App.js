import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Thor Odinson", imgUrl: "https://vignette.wikia.nocookie.net/marveldatabase/images/4/49/Thor_Odinson_%28Earth-TRN292%29_from_Young_Avengers_Vol_2_8_0001.png/revision/latest?cb=20130725120308", location: "Asgard", role: "God of Thunder"}}
            />
            
            <ContactCard 
                contact={{name: "Xul", imgUrl: "https://vignette.wikia.nocookie.net/diablo/images/5/53/XulVisage.jpg/revision/latest/scale-to-width-down/350?cb=20160121154302", location: "Tristram", role: "Necromancer"}}
            />
            
            <ContactCard
                contact={{name: "Conan", imgUrl: "http://legendsofmen.com/wp-content/uploads/2018/10/conan_the_barbarian.png", location: "Cimmeria", role: "Barbarian"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>
    )
}

export default App