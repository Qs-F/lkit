import { FC, Fragment } from 'react'
import { useXf } from '@creatorqsf/use-xf'

export const App: FC = () => {
  const [state, setState] = useXf((n: number): string => n.toString(), 0)
  return (
    <Fragment>
      <p onClick={() => setState(10)}>{state}</p>
    </Fragment>
  )
}
