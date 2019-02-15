/*
# (C) Copyright IBM Corp. 2019
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License. */
import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable()
export class StylingService {

    constructor() { }

    showFieldDescription(id: string) {
        if ($(`#${id}`).hasClass('scale-out')) {
            $(`#${id}`).removeClass('scale-out');
        } else {
            $(`#${id}`).addClass('scale-out');
        }
    }

    focusStyling(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const value = idAttr.nodeValue;
        $(`#${value}`).css('border-bottom', '1px solid #ffac2f');
        $(`#${value}`).css('box-shadow', '0 1px 0 0 #ffac2f');
    }

    unFocusStyling(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const value = idAttr.nodeValue;
        $(`#${value}`).css('border-bottom', '1px solid rgba(0,0,0,.12)');
        $(`#${value}`).css('box-shadow', 'none');
    }
}
