import { Provider } from 'mobx-react';
import React from 'react'
import EmployerComponents from './components/EmployerComponents';
import { setupRootStore } from './mst/setup';

type Props = {}

type State = {
  rootTree: any
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rootTree: null
    }
  }

  componentDidMount = () => {
    const { rootTree } = setupRootStore();
    this.setState({ rootTree });
  }

  render() {
    const { rootTree } = this.state
    if (!this.state.rootTree) return null

    return (
      <Provider rootTree={rootTree}>
        <EmployerComponents />
      </Provider>
    )
  }
}