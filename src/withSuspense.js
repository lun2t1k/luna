import {Suspense} from 'react'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='spinner'></div>
    </div>
  )
}

export const withSuspense = Component => props => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  )
}