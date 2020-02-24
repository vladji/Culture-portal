import {setAddon} from '@storybook/react';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';
import {addDecorator} from '@storybook/react';
import {withLiveEditScope} from 'storybook-addon-react-live-edit';
 
setOptions({ theme: 'darcula', presets: ['react'] });
 
setAddon(LiveEdit);