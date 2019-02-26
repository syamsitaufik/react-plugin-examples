import React, { PureComponent } from 'react';
import {
  BasicGaugeColor,
  Gauge,
  getColorFromHexRgbOrName,
  getMappedValue,
  Graph,
  TimeSeriesValue,
  ValueMapping,
} from '@grafana/ui';

import { Text } from './Text';

import { LayoutProps } from '../../types';

interface Props extends LayoutProps {}

export class BigTextLayout extends PureComponent<Props> {
  getFontColor(value: TimeSeriesValue) {
    const { thresholds, theme } = this.props;

    if (thresholds.length === 1) {
      return getColorFromHexRgbOrName(thresholds[0].color, theme.type);
    }

    const atThreshold = thresholds.filter(
      threshold => (value as number) === threshold.value
    )[0];
    if (atThreshold) {
      return getColorFromHexRgbOrName(atThreshold.color, theme.type);
    }

    const belowThreshold = thresholds.filter(
      threshold => (value as number) > threshold.value
    );

    if (belowThreshold.length > 0) {
      const nearestThreshold = belowThreshold.sort(
        (t1, t2) => t2.value - t1.value
      )[0];
      return getColorFromHexRgbOrName(nearestThreshold.color, theme.type);
    }

    return BasicGaugeColor.Red;
  }

  render() {
    const {
      onInterpolate,
      options,
      timeSeries,
      timeRange,
      width,
      height,
      valueMappings,
      theme,
    } = this.props;

    const gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    const prefix = onInterpolate(options.valueOptions.prefix);
    const suffix = onInterpolate(options.valueOptions.suffix);
    let text = '';

    if (valueMappings.length > 0) {
      const valueMappedValue = getMappedValue(valueMappings, gaugeValue);
      if (valueMappedValue) {
        text = valueMappedValue.text;
      }
    }

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: '40%', width: '100%' }}>
          <Text
            style={{
              fontSize: '60px',
              textAlign: 'center',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              color: this.getFontColor(gaugeValue),
            }}
            text={text}
          />
        </div>
        <div
          style={{
            height: '60%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ width: '60%', height: '100%' }}>
            <Graph
              timeSeries={timeSeries}
              timeRange={timeRange}
              width={width}
              height={height}
              showBars={options.showBars}
              showLines={options.showLines}
              showPoints={options.showPoints}
            />
          </div>
          <div style={{ width: '40%', height: '100%' }}>
            <Gauge
              value={gaugeValue}
              width={width / 3}
              height={height * 0.6}
              prefix={prefix}
              suffix={suffix}
              unit={options.valueOptions.unit}
              decimals={options.valueOptions.decimals}
              thresholds={options.thresholds}
              valueMappings={[] as ValueMapping[]}
              showThresholdLabels={options.showThresholdLabels}
              showThresholdMarkers={options.showThresholdMarkers}
              minValue={options.minValue}
              maxValue={options.maxValue}
              theme={theme}
            />
          </div>
        </div>
      </div>
    );
  }
}
