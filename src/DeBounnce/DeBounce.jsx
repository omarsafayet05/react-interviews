import axios from "axios";
import React, { useEffect, useState } from "react";

const DeBounce = () => {
  const [pin, setPin] = useState("");
  //const [codes, showCode] = useState("");

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pin}`)
        //or  .get(`https://api.postalpincode.in/pincode/` + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.err(err);
        });
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <div>
      <input
        placeholder="Type your pincode"
        onChange={(event) => setPin(event.target.value)}
      />
    </div>
  );
};

export default DeBounce;
//Debounce make sure that in Js, once triggered per user input.Search box suggetions,text-field auto saves,eliminating double click buttons are all use cases for debouncing.

//When should I use debounce?
// If we decide to delay the first process for a given amount of time to see if our user wants to type something else, so that if they do, we'll cancel the first one and then work on the second instead, that would be debouncing.
//Debounce is most suitable for control events like typing or button clicks. Throttle is most suitable for continuous user events like resizing and scrolling.
//Debounce mainly use for memory consumption. When you type Om in search box. It will find out in ms my name.No need to type whole name,That's saves memory.
//When you type pin code it calls api in several times(6 times).Which is abuse of fetch data.To avoid that use debouncing which is call api for once.
