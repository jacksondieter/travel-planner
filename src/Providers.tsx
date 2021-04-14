
import {StrictMode, FC} from 'react';
import { StoreProvider } from './store';
import {StyleProvider} from './theme/styleProvider'
import {Props} from './global'

const Providers:FC<Props> = ({children}) => (
  <StrictMode>
    <StoreProvider>
      <StyleProvider>
        {children}
      </StyleProvider>
    </StoreProvider>    
  </StrictMode>
)

export default Providers