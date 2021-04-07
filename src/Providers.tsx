
import {StrictMode, FC} from 'react';
import {StyleProvider} from './theme/styleProvider'
import {Props} from './global'

const Providers:FC<Props> = ({children}) => (
  <StrictMode>
    <StyleProvider>
      {children}
    </StyleProvider>
  </StrictMode>
)

export default Providers