export default function ProjectTitle(props) {
  return (
    <div className='project-title'>
      <h1>{props.title}</h1>
      <ul>
        {props.tags.map((tag, i) => {
          return <li key={`tag-${i}`}>{tag}</li>
        })}
      </ul>
    </div>
  )
}
