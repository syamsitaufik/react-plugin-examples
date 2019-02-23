import React, { PureComponent } from 'react';
import {
  PanelEditorProps,
  PanelOptionsGrid,
  Threshold,
  ThresholdsEditor,
} from '@grafana/ui';

import { LayoutOptions } from './LayoutOptions';
import { ValueOptions } from './Gauge/ValueOptions';

import { ComboOptions, SingleStatValueOptions } from '../types';
import { GaugeOptionsEditor } from './Gauge/GaugeOptionsEditor';

export class ComboPanelEditor extends PureComponent<
  PanelEditorProps<ComboOptions>
> {
  onLayoutChange = layout =>
    this.props.onChange({ ...this.props.options, layout: layout });

  onValueOptionsChanged = (valueOptions: SingleStatValueOptions) =>
    this.props.onChange({
      ...this.props.options,
      valueOptions,
    });

  onThresholdsChanged = (thresholds: Threshold[]) =>
    this.props.onChange({
      ...this.props.options,
      thresholds,
    });

  render() {
    // Options for Gauge (thresholds etc), Graph (lines, bars, points)
    // and Text (size color etc)
    // Options for resizing the sections, choose layout? ✅
    // Combine Thresholds and text (+ color)

    const { layout, valueOptions } = this.props.options;

    return (
      <>
        <PanelOptionsGrid>
          <LayoutOptions
            onChange={layout => this.onLayoutChange(layout)}
            selectedLayout={layout}
          />
        </PanelOptionsGrid>
        <PanelOptionsGrid>
          <ValueOptions
            options={valueOptions}
            onChange={valueOptions => this.onValueOptionsChanged(valueOptions)}
          />
          <GaugeOptionsEditor
            options={this.props.options}
            onChange={this.props.onChange}
          />
          <ThresholdsEditor
            thresholds={this.props.options.thresholds}
            onChange={thresholds => this.onThresholdsChanged(thresholds)}
          />
        </PanelOptionsGrid>
      </>
    );
  }
}
