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

@Injectable()
export class ExportService {

    constructor() {}

    exportToCSV(selectedIDs: Array<any>, searchResults: Array<any>) {
        let csvStream = 'data:text/csv;charset=utf-8,\"Testcase ID\",\"Package Name\",\"Class Name\",\"Method Name\",\"Method Body\"\n';
        selectedIDs.forEach(function(selectedID) {
            let csvRecord = '';
            for ( let i = 0; i < searchResults.length; i++ ) {
                if ( selectedID === '' + i /*searchResults[i].id*/ ) {
                    const updatedBody: string = searchResults[i].body.toString();
                    updatedBody.replace(/\n/g, '');
                    updatedBody.replace(/\'/g, '\\\'');
                    updatedBody.replace(/\"/g, '\\\"');
                    // updatedBody.replace(/\r?\n|\r/g, '');

                    const id = i; // searchResults[i].id;
                    const packageName = searchResults[i].packageName;
                    const className = searchResults[i].className;
                    const methodName = searchResults[i].methodName;

                    csvRecord = `${id},"${packageName}","${className}","${methodName}","${updatedBody}"\n`;
                    break;
                }
            }
            csvStream += csvRecord;
        });

        const encodeUri = encodeURI(csvStream);
        window.open(encodeUri);
    }
}
