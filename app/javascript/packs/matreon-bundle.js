import ReactOnRails from 'react-on-rails';

import ClientRouterApp from './ClientRouterApp';

import contributionsStore from '../bundles/Matreon/store/contributionsStore';

import 'bootstrap/dist/css/bootstrap.css';

import { } from 'reactstrap';

ReactOnRails.register({
  ClientRouterApp
});

ReactOnRails.registerStore({
  contributionsStore
});
