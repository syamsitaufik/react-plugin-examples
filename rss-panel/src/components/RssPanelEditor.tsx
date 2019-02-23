import React, { PureComponent } from 'react';
import {
  FormField,
  PanelOptionsGrid,
  PanelOptionsGroup,
  PanelEditorProps,
} from '@grafana/ui';
import { RssOptions } from '../types';

interface State {
  feedUrl: string;
}

export class RssPanelEditor extends PureComponent<
  PanelEditorProps<RssOptions>,
  State
> {
  constructor(props) {
    super(props);

    this.state = {
      feedUrl: props.options.feedUrl,
    };
  }

  onUpdatePanel = () =>
    this.props.onChange({ ...this.props.options, feedUrl: this.state.feedUrl });

  onFeedUrlChange = ({ target }) => this.setState({ feedUrl: target.value });

  render() {
    const { feedUrl } = this.state;

    return (
      <>
        <PanelOptionsGrid>
          <PanelOptionsGroup title="Feed">
            <div className="gf-form">
              <FormField
                label="Feed url"
                labelWidth={6}
                value={feedUrl}
                onChange={this.onFeedUrlChange}
                onBlur={this.onUpdatePanel}
              />
            </div>
          </PanelOptionsGroup>
        </PanelOptionsGrid>
      </>
    );
  }
}
