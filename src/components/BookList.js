import { useContext, useState } from "react";
import BookContext from "../contexts/BookContext";

function BookList() {

  let { searchResults } = useContext(BookContext);

  return (

    <>
            {
              searchResults.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <>
                            <div className="card">
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            </>
                        )
                    }
                    
                })
            }

        </>


  )
  
}


export default BookList;