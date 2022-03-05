import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import { Root } from '../mst';

type Props = {
    rootTree?: Root
}

type State = {}

@inject("rootTree")
@observer

class EmployerComponents extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        const { rootTree } = this.props;
        if (!rootTree) return null;

        return (
            <div>
                <h1>{rootTree.employer.name}</h1>
                <h2>{rootTree.employer.location}</h2>
                <hr />
            </div>
        )
    }
}

export { EmployerComponents };