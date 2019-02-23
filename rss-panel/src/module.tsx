import { ReactPanelPlugin } from '@grafana/ui';
import { RssPanel } from './components/RssPanel';
import { RssPanelEditor } from './components/RssPanelEditor';
import { defaults, RssOptions } from './types';

export const reactPanel = new ReactPanelPlugin<RssOptions>(RssPanel);

reactPanel.setEditor(RssPanelEditor);
reactPanel.setDefaults(defaults);
