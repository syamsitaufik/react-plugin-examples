import React, { PureComponent } from 'react';
import { PanelEditorProps, PanelOptionsGrid } from '@grafana/ui';

import { LayoutOptions } from './LayoutOptions';

import { ComboOptions } from '../types';

export class ComboPanelEditor extends PureComponent<
  PanelEditorProps<ComboOptions>
> {
  onLayoutChange = layout =>
    this.props.onChange({ ...this.props.options, layout: layout });

  render() {
    // Options for Gauge (thresholds etc), Graph (lines, bars, points)
    // and Text (size color etc)
    // Options for resizing the sections, choose layout?
    // Combine Thresholds and text (+ color)
    return (
      <div>
        <PanelOptionsGrid>
          <LayoutOptions
            onChange={layout => this.onLayoutChange(layout)}
            selectedLayout={this.props.options.layout}
          />
        </PanelOptionsGrid>
      </div>
    );
  }
}
