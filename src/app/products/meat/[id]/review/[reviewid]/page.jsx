import React from 'react'

function page({params}) {
  return (
    <div>meat item {params.id} review {params.reviewid}</div>
  )
}

export default page