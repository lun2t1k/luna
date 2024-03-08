export default function ContentTitle(props) {
  return (
    <div className='content-title'>
      <h1>{props.title}</h1>
      <div className='content-title-count'>({props.number})</div>
    </div>
  )
}
