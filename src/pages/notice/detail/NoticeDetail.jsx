import React from 'react'
import { useParams } from 'react-router-dom'

export default function NoticeDetail() {
    const {id} = useParams();
  return (
    <div>{id}NoticeDetail</div>
  )
}
