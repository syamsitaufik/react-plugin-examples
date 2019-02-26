import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, ReactPanelPlugin } from '@grafana/ui';

export class MyPanel extends PureComponent<PanelProps> {
  render() {
    const { timeSeries } = this.props.panelData;

    if (!timeSeries && !timeSeries.length) {
      return <div>No data</div>
    }

    const maxValue = _.maxBy(timeSeries[0].datapoints, v => v[0])[0];

    return (
      <h2>Max: {maxValue.toFixed(2)}</h2>
    );
  }
}

export const reactPanel = new ReactPanelPlugin(MyPanel);
