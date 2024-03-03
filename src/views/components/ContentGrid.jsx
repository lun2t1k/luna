import ContentLink from './ContentLink'

export default function ContentGrid(props) {
  return (
    <div className='content'>
      {props.links.map((link, i) => {
        return <ContentLink key={`link-${i}`} href={link.href} image={link.image} tags={link.tags} title={link.title} />
      })}
    </div>
  )
}