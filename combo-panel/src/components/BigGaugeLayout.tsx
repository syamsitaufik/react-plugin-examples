import React, { PureComponent } from 'react';
import { LayoutProps } from '../types';
import { Gauge, Graph, ThemeContext } from '@grafana/ui';

interface Props extends LayoutProps {}

export class BigGaugeLayout extends PureComponent<Props> {
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
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div style={{ width: '50%' }}>
          <div
            style={{
              height: '30%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '48px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Server ok
          </div>
          <div style={{ height: '70%' }}>
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
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ThemeContext.Consumer>
            {theme => {
              return (
                <Gauge
                  value={gaugeValue}
                  width={width / 2}
                  height={height}
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
    );
  }
}
