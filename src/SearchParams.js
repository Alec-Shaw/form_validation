import React from "react";
import { FormGroup, Input } from "reactstrap";

const SearchParams = () => {
    const texts = require("./cities.json");
     const clone = JSON.parse(JSON.stringify(texts))
    
       const rent = clone.sort(function(obj1, obj2) {
        return obj2.population-obj1.population;
      });
      const [first, ...rentNew] = rent;

      const alfab = rentNew.sort(function(a,b) {
        if (a.city < b.city) return -1;
        if (a.city > b.city) return 1;
           return 0;
      }); 
      alfab.unshift(first)

 // eslint-disable-next-line
    const options = alfab.map((item) => { 
      if (item.population > 50000) return <option key={item.population}>{item.city} {item.population}</option>;
      
    }); 
   
    return (
        
      
      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          {options}
        </Input>
      </FormGroup>
    
   
    );
  }

  export default SearchParams;