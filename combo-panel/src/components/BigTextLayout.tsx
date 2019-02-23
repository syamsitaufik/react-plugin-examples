import React, { PureComponent } from 'react';
import { Gauge, Graph, ThemeContext } from '@grafana/ui';

import { LayoutProps } from '../types';

interface Props extends LayoutProps {}

export class BigTextLayout extends PureComponent<Props> {
  render() {
    const {
      onInterpolate,
      options,
      timeSeries,
      timeRange,
      width,
      height,
    } = this.props;

    const gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    const prefix = onInterpolate(options.valueOptions.prefix);
    const suffix = onInterpolate(options.valueOptions.suffix);

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
          <div
            style={{
              fontSize: '60px',
              textAlign: 'center',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Server ok
          </div>
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
              showBars={false}
              showLines={true}
              showPoints={false}
            />
          </div>
          <div style={{ width: '40%', height: '100%' }}>
            <ThemeContext.Consumer>
              {theme => {
                return (
                  <Gauge
                    value={gaugeValue}
                    width={width / 3}
                    height={height * 0.6}
                    prefix={prefix}
                    suffix={suffix}
                    unit={options.valueOptions.unit}
                    decimals={options.valueOptions.decimals}
                    thresholds={options.thresholds}
                    valueMappings={options.valueMappings}
                    showThresholdLabels={options.showThresholdLabels}
                    showThresholdMarkers={options.showThresholdMarkers}
                    minValue={options.minValue}
                    maxValue={options.maxValue}
                    theme={theme}
                  />
                );
              }}
            </ThemeContext.Consumer>
          </div>
        </div>
      </div>
    );
  }
}
