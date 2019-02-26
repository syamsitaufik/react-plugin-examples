import _ from 'lodash';
import React, { PureComponent } from 'react';
import {
  PanelProps,
  ReactPanelPlugin,
  PanelEditorProps,
  PanelOptionsGroup,
  FormField,
  getValueFormat,
} from '@grafana/ui';

export class MyPanel extends PureComponent<PanelProps<MyPanelOptions>> {
  render() {
    const { options } = this.props;
    const { timeSeries } = this.props.panelData;

    const maxValue = _.maxBy(timeSeries[0].datapoints, v => v[0])[0];
    const formatFunc = getValueFormat('ms');

    return (
      <div className="center-vh">
        <h1 style={{ fontSize: '80px' }}>{options.bigText}</h1>
        <h2>Max: {formatFunc(maxValue)}</h2>
      </div>
    );
  }
}

interface MyPanelOptions {
  bigText: string;
}

export class MyPanelEditorProps extends PureComponent<PanelEditorProps<MyPanelOptions>> {
  onBigTextChanged = evt => {
    this.props.onChange({
      ...this.props.options,
      bigText: evt.target.value,
    });
  };

  render() {
    const { bigText } = this.props.options;

    return (
      <PanelOptionsGroup title="My options">
        <FormField label="Big text" onChange={this.onBigTextChanged} value={bigText} />
      </PanelOptionsGroup>
    );
  }
}

export const reactPanel = new ReactPanelPlugin<MyPanelOptions>(MyPanel);
reactPanel.setEditor(MyPanelEditorProps);
reactPanel.setDefaults({ bigText: 'GrafanaCon' });
