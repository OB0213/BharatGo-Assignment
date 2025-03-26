import React from 'react'

function ModalComponent({data}) {
  return (
    <div className='w-100 h-100'>
      <img src={data.category.image} className="myimage1 w-100 mx-1 my-2"></img>
      <h4 className='fw-bold text-center py-2'>${data.price}</h4>
      <h4 className='fw-bold text-center py-2'>{data.title}</h4>
      <p className='py-2 px-2 text-center'>{data.description}</p>

    </div>
  );
}

export default ModalComponent
