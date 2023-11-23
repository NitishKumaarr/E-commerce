 const Form=()=>{
    return(
        <form onSubmit={SubmitForm}>
        <h2>Item Card Details</h2>
        <div>
          <label htmlFor="title">Title</label>
          <br />
        <input name="brand"type="text" placeholder="Enter Title" onChange={handleInput} value={item.brand} required/>
        </div>
         <div>
          <label htmlFor="title">Price</label>
          <br />
        <input  name="oldPrice" type="number" placeholder="Enter Price" onChange={handleInput} value={item.oldPrice} required/>
        </div>
        <div>
          <label htmlFor="title">Discount</label>
          <br />
        <input  name="newPrice" type="number" placeholder="Enter Discounted Price" onChange={handleInput} value={item.newPrice}/>
        </div>
        <div>
          <label htmlFor="title">Thumbnail</label>
          <br />
        <input name="img" type="text" placeholder="" onChange={handleInput} value={item.img}/>
        </div>
        <div>
          <button className='button'>Update</button>
        </div>
      </form>
    )
 }
 export default Form;