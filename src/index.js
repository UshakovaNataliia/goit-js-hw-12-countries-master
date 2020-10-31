import './scss/styles.scss';
import { defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import lodash from 'lodash';
import {renderPage} from './js/rendering.js';

defaultModules.set(PNotifyMobile, {});

const input = document.querySelector('.js-input');
input.addEventListener('input', lodash.debounce(()=>{
  renderPage()}, 500));



