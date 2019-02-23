import { ReactPanelPlugin } from '@grafana/ui';

import { ComboPanel } from './components/ComboPanel';
import { ComboPanelEditor } from './components/ComboPanelEditor';

import { defaults, ComboOptions } from './types';

export const reactPanel = new ReactPanelPlugin<ComboOptions>(ComboPanel);

reactPanel.setEditor(ComboPanelEditor);
reactPanel.setDefaults(defaults);
