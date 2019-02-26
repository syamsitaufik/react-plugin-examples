import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, ReactPanelPlugin, PanelEditorProps, PanelOptionsGroup, FormField } from '@grafana/ui';

export class MyPanel extends PureComponent<PanelProps<MyPanelOptions>> {
  render() {
    const { options } = this.props;
    const { timeSeries } = this.props.panelData;

    const maxValue = _.maxBy(timeSeries[0].datapoints, v => v[0])[0];

    return (
      <div>
        <h2>Stat: {options.stat}</h2>
        <h2>Max: {maxValue.toFixed(2)}</h2>)
      </div>
    );
  }
}

interface MyPanelOptions {
  stat: string;
}

export class MyPanelEditorProps extends PureComponent<PanelEditorProps<MyPanelOptions>> {
  onStatChange = evt => {
    this.props.onChange({
      ...this.props.options,
      stat: evt.target.value,
    });
  };

  render() {
    return (
      <PanelOptionsGroup title="My options">
        <FormField label="Stat" onChange={this.onStatChange} />
      </PanelOptionsGroup>
    );
  }
}

export const reactPanel = new ReactPanelPlugin(MyPanel);
reactPanel.setEditor(MyPanelEditorProps);
