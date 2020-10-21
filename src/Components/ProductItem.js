import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import useWebAnimations , {backInLeft, bounce, swing} from "@wellyshen/use-web-animations";


function ProductItem() {
  const { ref , playState} = useWebAnimations ({...swing});
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h2> Product Not Found</h2>
  return (
    <div >
      <h1 style = {{background:"orange", color : "gray", fontFamily:"monospace", fontSize:"34px"}}> Welcome to Product Item Detail Page</h1>
      <div  className="link">
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={500} alt ="shoe" />
      </div>
      <div ref = {ref} className="mytext">Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike
      Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike
      Early days Adolf Dassler, founder of Adidas, c. 1915; (right): the 'Dassler Brothers Shoe Factory' near Herzogenaurach train station in 1928
The company was founded by Adolf "Adi" Dassler who made sports shoes in his mother's scullery or laundry room in Herzogenaurach, Germany after his return from World War I. In July 1924, his older brother Rudolf joined the business, which became "Dassler Brothers Shoe Factory" (Gebrüder Dassler Schuhfabrik).[10] The electricity supply in Herzogenaurach was unreliable, so the brothers sometimes had to use pedal power from a stationary bicycle to run their equipment.[11]

Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber.[12] In 1936, Dassler persuaded U.S. sprinter Jesse Owens to use his hand made spikes at the 1936 Summer Olympics. Following Owens' four gold medals, the name and reputation of Dassler shoes became known to the world's sportsmen and their trainers. Business was successful and the Dasslers were selling 200,000 pairs of shoes every year before World War II.[13]

The Dassler factory, subsequently became major buyers of the Dassler brothers' </div>
    </div>
  );
}

export default ProductItem;
