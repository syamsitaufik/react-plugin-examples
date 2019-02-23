import React, { PureComponent } from 'react';
import { NullValueMode, PanelProps, processTimeSeries } from '@grafana/ui';

import { ComboOptions } from '../types';
import { BigTextLayout } from './BigTextLayout';
import { BigGaugeLayout } from './Gauge/BigGaugeLayout';
import { BigGraphLayout } from './BigGraphLayout';

interface Props extends PanelProps<ComboOptions> {}

export class ComboPanel extends PureComponent<Props> {
  // Gauge does not get proper width

  render() {
    const {
      onInterpolate,
      options,
      panelData,
      timeRange,
      width,
      height,
    } = this.props;

    const { layout } = options;

    if (panelData.timeSeries) {
      const timeSeries = processTimeSeries({
        timeSeries: panelData.timeSeries,
        nullValueMode: NullValueMode.Null,
      });

      switch (layout) {
        case 'bigtext':
          return (
            <BigTextLayout
              timeSeries={timeSeries}
              timeRange={timeRange}
              width={width}
              height={height}
              options={options}
              onInterpolate={onInterpolate}
            />
          );

        case 'biggraph':
          return (
            <BigGraphLayout
              timeSeries={timeSeries}
              timeRange={timeRange}
              width={width}
              height={height}
              options={options}
              onInterpolate={onInterpolate}
            />
          );

        default:
        case 'biggauge':
          return (
            <BigGaugeLayout
              timeSeries={timeSeries}
              timeRange={timeRange}
              width={width}
              height={height}
              options={options}
              onInterpolate={onInterpolate}
            />
          );
      }
    } else {
      return <div>Panel needs time series data</div>;
    }
  }
}
