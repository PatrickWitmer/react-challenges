import React from 'react'

function Ingredients() {
    return (
      <section>
      <div>  
      <input type="checkbox" id="aether" name="aether" />
          <label htmlFor="aether">Aether</label>
      </div>
      <div>    
      <input type="checkbox" id="alcohest" name="alcohest" />
          <label htmlFor="alcohest">Alcohest</label>
      </div>
      <div>   
      <input type="checkbox" id="bloodmoss" name="bloodmoss" />
          <label htmlFor="bloodmoss">Bloodmoss</label>
      </div>    
      </section>    
    )
}

export default Ingredients